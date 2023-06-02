from django.urls import path

app_name = "notes"

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("editnotes/<int:pk>", views.edit_notes, name="edit_notes"),
    path("deletenotes/<int:pk>", views.delete_notes, name="delete_notes"),
    path("api/notes/<int:pk>/", views.api_notes, name="api_notes"),
]
