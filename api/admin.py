from django.contrib import admin
from .models import UserProfile, Product, Cart, CartItem, Order, OrderItem


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "address", "phone_number")
    search_fields = ("user__username", "user__email", "phone_number")


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "stock")
    search_fields = ("name", "description")
    list_filter = ("stock",)


class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 1


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ("user", "get_total_items", "get_total_price")
    inlines = [CartItemInline]

    def get_total_items(self, obj):
        return sum(item.quantity for item in obj.cartitem_set.all())

    get_total_items.short_description = "Total Items"

    def get_total_price(self, obj):
        return sum(
            item.product.price * item.quantity for item in obj.cartitem_set.all()
        )

    get_total_price.short_description = "Total Price"


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("user", "total_price", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("user__username", "user__email")
    inlines = [OrderItemInline]


# We don't need to register CartItem and OrderItem separately as they're included as inlines
