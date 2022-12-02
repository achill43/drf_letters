from django.urls import path

from users.views import CreateUserAPIView, UserListAPIView

urlpatterns = [
    path("registration/", CreateUserAPIView.as_view(), name="registration"),
    path("", UserListAPIView.as_view(), name="user_list"),
]
