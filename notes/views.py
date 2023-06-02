from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render, redirect
from .models import Todonote
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .forms import NoteForm, ContactForm
from django.contrib import messages

# Create your views here.


def home(request):
    form = NoteForm()
    if request.method == "POST":
        if request.user.is_authenticated:
            try:
                form = NoteForm(request.POST)
                if form.is_valid():
                    note = form.save(commit=False)
                    note.username = request.user
                    note.save()
                    messages.success(
                        request,
                        "Note added successfully!!",
                        extra_tags="alert alert-success alert-dismissible fade show",
                    )
                    return redirect("/")
            except:
                messages.error(
                    request,
                    "Oops someting is missing,please try angain!!",
                    extra_tags="alert alert-warning alert-dismissible fade show",
                )
                pass
        else:
            messages.error(
                request,
                "Please login for adding notes",
                extra_tags="alert alert-warning alert-dismissible fade show",
            )
            return redirect("accounts/login")
    notes = {}
    if request.user.is_authenticated:
        notes = Todonote.objects.filter(username=request.user)

    return render(request, "notes/home.html", {"notes": notes, "form": form})


@login_required
def edit_notes(request, pk):
    try:
        title = request.POST.get("title", None)
        description = request.POST.get("description", None)
        if title == None or description == None:
            messages.error(
                request,
                "Oops someting is missing,please try angain!!",
                extra_tags="alert alert-warning alert-dismissible fade show",
            )
            return redirect("notes:home")
        note = Todonote.objects.get(id=pk)
        note.title = title
        note.description = description
        note.save()
        messages.success(
            request,
            "Note updated successfully!!",
            extra_tags="alert alert-success alert-dismissible fade show",
        )
    except:
        messages.error(
            request,
            "Oops someting is missing,please try angain!!",
            extra_tags="alert alert-warning alert-dismissible fade show",
        )
        pass
    return redirect("notes:home")


@login_required
def delete_notes(request, pk):
    try:
        notes = Todonote.objects.filter(id=pk, username=request.user)
        if notes:
            notes.delete()
            messages.success(
                request,
                "Note deleted successfully!!",
                extra_tags="alert alert-success alert-dismissible fade show",
            )
        else:
            messages.error(
                request,
                "No notes found",
                extra_tags="alert alert-warning alert-dismissible fade show",
            )

    except:
        messages.error(
            request,
            "Oops someting is missing,please try angain!!",
            extra_tags="alert alert-warning alert-dismissible fade show",
        )
        pass
    return redirect("notes:home")
    pass


@login_required
def api_notes(request, pk):
    note = get_object_or_404(Todonote, id=pk)

    # Create a dictionary with the note data
    note_data = {
        "title": note.title,
        "description": note.description,
        # Add more fields as needed
    }

    return JsonResponse(note_data)


def about(request):
    return render(request, "notes/about.html")


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            if not request.user.is_authenticated:
                messages.error(
                    request,
                    "Please login to contact us",
                    extra_tags="alert alert-warning alert-dismissible fade show",
                )
                return redirect("accounts:login")
            contact = form.save(commit=False)
            contact.user = request.user
            contact.save()
            messages.success(
                request,
                "Thankyou for contacting us, we'll get back soon.",
                extra_tags="alert alert-success alert-dismissible fade show",
            )
            return redirect("notes:contact")
        else:
            messages.error(
                request,
                "Oops someting is missing,please try angain!!",
                extra_tags="alert alert-warning alert-dismissible fade show",
            )
    else:
        form = ContactForm()
    return render(request, "notes/contact.html", {"form": form})
