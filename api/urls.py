from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserProfileViewSet,
    ProductViewSet,
    CartViewSet,
    OrderViewSet,
    SignupView,
    LoginView,
)

router = DefaultRouter()
router.register(r"profiles", UserProfileViewSet)
router.register(r"products", ProductViewSet)
router.register(r"carts", CartViewSet)
router.register(r"orders", OrderViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
]
