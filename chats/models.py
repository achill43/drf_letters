from django.conf import settings
from django.db import models


User = getattr(settings, "AUTH_USER_MODEL", "auth.User")


class Message(models.Model):
    sender = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="sended_messages"
    )
    recipient = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="recipient_messages"
    )
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=255)
    is_inbox = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
