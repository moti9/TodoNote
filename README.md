# TodoNote

![Todonote Logo](/static/images/todo.gif)


TodoNote is a simple web application that allows users to manage their tasks and notes effectively. With features like user authentication, adding, editing, and deleting notes, TodoNote provides a seamless experience for organizing your tasks.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Create Notes**: Users can add new notes with titles and descriptions.
- **Edit Notes**: Users can update their existing notes.
- **Delete Notes**: Unwanted notes can be deleted easily.
- **View Note Details**: Users can view detailed information about each note.
- **Responsive Design**: The application is designed to work on various screen sizes.

## Tech Stack

- **Django**: The web framework for building the backend.
- **HTML/CSS/JavaScript**: For frontend development.
- **SQLite**: As the database management system.

## Pages

- **Home**: Landing page displaying user notes.
- **About**: Information about the TodoNote project.
- **Viewnote**: Page for viewing detailed information about a specific note.
- **Login**: User login page.
- **Signup**: User registration page.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/moti9/TodoNote.git
   cd TodoNote
   ```

2. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Migrate the database
   ```bash
   python manage.py migrate
   ```

4. Create a superuser (admin) account:
    ```bash
    python manage.py createsuperuser
    ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

6. Open your web browser and access the application at `http://localhost:8000`

7. To access the admin panel, log in with the superuser account at `http://localhost:8000/admin`

## Contributing
Contributions are welcome! If you'd like to contribute to TodoNote, please follow these steps:

-   Fork the project.
-   Create a new branch for your feature or bug fix.
-   Make your changes and commit them.
-   Push to your fork and submit a pull request to the main repository.


### Note: 

This project is for educational purposes and may not be suitable for production use. It uses SQLite as the database, which is not recommended for high-traffic applications.