from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Property(models.Model):
    address_1 = models.CharField(max_length=100)
    address_2 = models.CharField(
        max_length=100,
        blank=True,
    )
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2)
    zip_code = models.CharField(max_length=5)
    source_url = models.URLField(max_length=2000)
    categories = models.ManyToManyField('Category', related_name='properties')
    notes = models.TextField(blank=True)
    list_price = models.PositiveIntegerField()
    added_date = models.DateTimeField(auto_now_add=True)

    def category_list(self):
        return ", ".join([c.name for c in self.categories.all()])

    def __str__(self):
        return f"{self.address_1} - {self.city}, {self.state}"