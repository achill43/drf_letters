from rest_framework import serializers

from chats.models import Message
from users.serializers import UserSerializers


class CreateMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ["recipient", "title", "body"]

    def create(self, attrs):
        message = Message(**attrs)
        message.sender = self.context.get("user")
        message.save()
        return message


class ListMessageSerializer(serializers.ModelSerializer):
    sender = UserSerializers()
    recipient = UserSerializers()

    class Meta:
        model = Message
        fields = ["id", "sender", "recipient", "title", "body", "created_at"]
