# ConsistentPassGen

ConsistentPassGen is a deterministic password generator and organizer that creates unique, yet consistent passwords based on your input text. It provides an intuitive web interface to manage your account-password pairs and stores the data locally in your browser using localStorage. With ConsistentPassGen, you get reliable password generation that is tailored to each account, giving you an extra layer of convenience and security.

## Features

Here's a breakdown of the main features of the ConsistentPassGen code:

Deterministic Password Generation: The code generates consistent passwords for the same input text, using a SHA-256 hashing function to create a deterministic hash based on the input. This ensures that the same account will always produce the same password.

Password Management: The PasswordGeneratorOrganizer class in password-manager.js file manages passwords by allowing users to add, remove, and list account-password pairs. It also provides a simple API for interacting with the stored passwords.

User Interface: The HTML file contains a user-friendly form that allows users to input the account name and desired password length. It also displays the stored account-password pairs in a list, making it easy for users to view and manage their passwords.

Local Storage: The ConsistentPassGen code leverages the localStorage API to persist stored passwords in the browser. This enables users to retain their account-password pairs across page refreshes and browser sessions. Note that localStorage is not a secure storage solution, and you should consider using a server-side database or other secure client-side storage mechanisms for sensitive data like passwords.

Event Handling: The JavaScript code within the HTML file handles form submissions and updates the password list accordingly. It also manages click events on the list items, allowing users to remove passwords by clicking on them.

By combining these features, ConsistentPassGen provides a convenient and user-friendly tool for managing and generating consistent passwords based on input text.
