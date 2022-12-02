from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.exceptions import ValidationError


User = get_user_model()


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]


class CreateUserSerializers(serializers.ModelSerializer):
    r_password = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password", "r_password"]

    def validate(self, attrs):
        password = attrs.get("password")
        r_password = attrs.get("r_password")
        if not r_password:
            raise ValidationError({"r_password": "'r_password' is required!"})
        if password != r_password:
            raise ValidationError({"password": "'password' and 'r_password' must be the same!"})
        return attrs

    def create(self, attrs):
        password = attrs.get("password")
        attrs.pop("password")
        attrs.pop("r_password")
        user = User(**attrs)
        user.is_active = True
        user.set_password(password)
        user.save()
        return user