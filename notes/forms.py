from django import forms

from .models import Todonote, Contact


class NoteForm(forms.ModelForm):
    class Meta:
        model = Todonote
        fields = ["title", "description"]
        widgets = {
            "title": forms.TextInput(
                attrs={"class": "form-control my-2", "placeholder": "Enter note title"},
            ),
            "description": forms.Textarea(
                attrs={
                    "class": "form-control my-2",
                    "rows": "3",
                    "placeholder": "Enter note description",
                },
            ),
        }


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ["name", "email", "subject", "message"]
        widgets = {
            "name": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Your name"}
            ),
            "email": forms.EmailInput(
                attrs={"class": "form-control", "placeholder": "Your email"}
            ),
            "subject": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Subject"}
            ),
            "message": forms.Textarea(
                attrs={"class": "form-control", "placeholder": "Message", "rows": 5}
            ),
        }
