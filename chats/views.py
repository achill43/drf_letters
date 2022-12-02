from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveDestroyAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

from chats.models import Message
from chats.serializers import CreateMessageSerializer, ListMessageSerializer


class CreateMesageAPIView(CreateAPIView):
    serializer_class = CreateMessageSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RDMessageAPIView(RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ListMessageSerializer
    queryset = Message.objects.all()

    def get_object(self):
        pk = self.kwargs.get("pk")

        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=pk)

        if obj.sender == self.request.user or obj.recipient == self.request.user:
            return obj
        raise PermissionDenied()

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_inbox = False
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class SendedMesageAPIView(ListAPIView):
    serializer_class = ListMessageSerializer
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(sender=self.request.user)
        return queryset


class RecipientMesageAPIView(ListAPIView):
    serializer_class = ListMessageSerializer
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(recipient=self.request.user)
        return queryset


class InboxMesageAPIView(ListAPIView):
    serializer_class = ListMessageSerializer
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(recipient=self.request.user, is_inbox=True)
        return queryset
