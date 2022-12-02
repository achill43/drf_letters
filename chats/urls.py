from django.urls import path

from chats.views import (
    CreateMesageAPIView,
    InboxMesageAPIView,
    SendedMesageAPIView,
    RecipientMesageAPIView,
    RDMessageAPIView,
)

urlpatterns = [
    path("", CreateMesageAPIView.as_view(), name="create_message"),
    path("inbox/", InboxMesageAPIView.as_view(), name="inbox_messages"),
    path("sended/", SendedMesageAPIView.as_view(), name="sended_messages"),
    path("recipient/", RecipientMesageAPIView.as_view(), name="recipient_messages"),
    path("<int:pk>/", RDMessageAPIView.as_view(), name="delete_message"),
]
