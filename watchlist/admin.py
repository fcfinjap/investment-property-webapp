from django.contrib import admin
from watchlist.models import Property, Category

class PropertyAdmin(admin.ModelAdmin):
    list_display = ("address_1", "city", "state", "category_list", "list_price", "added_date")

class CategoryAdmin(admin.ModelAdmin):
    pass

admin.site.register(Property, PropertyAdmin)
admin.site.register(Category, CategoryAdmin)