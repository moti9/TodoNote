//////////////////////////////////////////////
///////////$$--DUMP-AREA--$$//////////////////
//////////////////////////////////////////////

$(document).ready(function () {
    $("#notestable").DataTable();
});

var editModal = document.getElementById('editModal');
editModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var noteId = button.getAttribute('data-note-id');
    var form = document.getElementById('editForm');
    form.action = '/editnote/' + noteId + '/'; // Replace with the correct URL for updating notes
    form.method = "POST";

    // Fetch data using POST method
    fetch('/api/notes/' + noteId + '/', {
        method: 'POST', // Use POST method
        headers: {
            'Content-Type': 'application/json', // Set the content type
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token
        },
        body: JSON.stringify({}), // An empty request body for the GET request
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            var titleInput = document.getElementById('titleEdit');
            var descInput = document.getElementById('descEdit');
            titleInput.value = data.title;
            descInput.value = data.description;
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });

    // Add a click event handler for the "Save" button
    var saveButton = document.querySelector('#editModal button[type="submit"]');
    saveButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Use Fetch API to submit the form data
        fetch(form.action, {
            method: 'POST', // Use POST method
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Set the content type
                'X-CSRFToken': getCookie('csrftoken') // Include CSRF token
            },
            body: new URLSearchParams(new FormData(form)), // Serialize form data
        })
            .then(function (response) {
                if (response.ok) {
                    // Handle success, e.g., close the modal and refresh the page
                    $('#editModal').modal('hide'); // Close the modal
                    return response.json();
                } else {
                    $('#editModal').modal('hide'); // Close the modal
                    throw new Error('Form submission failed');
                }
            })
            .then(function (data) {
                // Redirect using the URL from the JSON response
                window.location.href = data.redirect_url;
            })
            .catch(function (error) {
                $('#editModal').modal('hide'); // Close the modal
                console.error('Form submission error:', error);
            });
    });
});

// Function to get the CSRF token from cookies
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

//////////////////////////
//////COPY-2/////////////
/////////////////////////
$(document).ready(function () {
    $("#notestable").DataTable();
});

var editModal = document.getElementById('editModal');
editModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var noteId = button.getAttribute('data-note-id');
    var form = document.getElementById('editForm');
    form.action = '/editnote/' + noteId + '/'; // Replace with the correct URL for updating notes
    form.method = "POST";

    fetch('/api/notes/' + noteId + '/')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            var titleInput = document.getElementById('titleEdit');
            var descInput = document.getElementById('descEdit');
            titleInput.value = data.title;
            descInput.value = data.description;
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });

    // Add a click event handler for the "Save" button
    var saveButton = document.querySelector('#editModal button[type="submit"]');
    saveButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Use Fetch API to submit the form data
        fetch(form.action, {
            method: form.method,
            body: new FormData(form), // Serialize form data
            headers: {
                'X-CSRFToken': getCookie('csrftoken') // Use a function to get the CSRF token
            }
        })
            .then(function (response) {
                if (response.ok) {
                    // Handle success, e.g., close the modal and refresh the page
                    $('#editModal').modal('hide'); // Close the modal
                    window.location.reload(); // Reload the page
                } else {
                    $('#editModal').modal('hide'); // Close the modal
                    throw new Error('Form submission failed');
                }
            })
            .catch(function (error) {
                $('#editModal').modal('hide'); // Close the modal
                console.error('Form submission error:', error);
            });
    });
});

// Function to get the CSRF token from cookies
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

//////////////////////////
//////COPY-3/////////////
/////////////////////////
$(document).ready(function () {
    $("#notestable").DataTable();
});

var editModal = document.getElementById('editModal');
editModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var noteId = button.getAttribute('data-note-id');
    console.log(noteId);
    var form = document.getElementById('editForm');
    form.action = '/editnote/' + noteId + '/'; // Replace with the correct URL for updating notes
    form.method = "POST";

    fetch('/api/notes/' + noteId + '/')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            var titleInput = document.getElementById('titleEdit');
            var descInput = document.getElementById('descEdit');
            titleInput.value = data.title;
            descInput.value = data.description;
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });

    // Add a click event handler for the "Save" button
    var saveButton = document.querySelector('#editModal button[type="submit"]');
    saveButton.addEventListener('click', function (e) {
        console.log('Save button clicked'); // Add this line
        e.preventDefault(); // Prevent the default form submission

        // Use Fetch API to submit the form data
        fetch(form.action, {
            method: form.method,
            body: new FormData(form), // Serialize form data
            headers: {
                'X-CSRFToken': '{{ csrf_token }}' // Include CSRF token
            }
        })
            .then(function (response) {
                if (response.ok) {
                    // Handle success, e.g., close the modal
                    $('#editModal').modal('hide'); // Close the modal
                    window.reload();
                } else {
                    $('#editModal').modal('hide'); // Close the modal
                    throw new Error('Form submission failed');
                }
            })
            .catch(function (error) {
                $('#editModal').modal('hide'); // Close the modal
                console.error('Form submission error:', error);
            });
    });
});


//////////////////////////
//////COPY-4/////////////
/////////////////////////

$(document).ready(function () {
    $("#notestable").DataTable();
});

var editModal = document.getElementById('editModal');
editModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var noteId = button.getAttribute('data-note-id');
    console.log(noteId)
    var form = document.getElementById('editForm');
    form.action = 'editnote/' + noteId + '/';
    form.method = "POST";

    fetch('/api/notes/' + noteId + '/')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            var titleInput = document.getElementById('titleEdit');
            var descInput = document.getElementById('descEdit');
            titleInput.value = data.title;
            descInput.value = data.description;
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
});