from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated

from users.serializers import UserSerializers, CreateUserSerializers

User = get_user_model()


class CreateUserAPIView(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = CreateUserSerializers
    queryset = User.objects.all()



class UserListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializers
    queryset = User.objects.all()
