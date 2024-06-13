# 3D Shoe Customizer

Welcome to the 3D Shoe Customizer! This project is a web application that allows users to create unique and exclusive shoes using a 3D customization tool. The app provides a user-friendly interface for designing shoes with various customization options, including colors for different parts of the shoe, such as laces, mesh, caps, inner, sole, stripes, band, and patch.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **User Authentication**: Register and login functionality using Firebase Authentication.
- **3D Shoe Customization**: Customize various parts of the shoe in real-time with a 3D model.
- **Persistent Storage**: Save and fetch user-specific customizations from Firebase Firestore.
- **Responsive Design**: Works on various screen sizes and devices.
- **Modern UI**: Built with React, Framer Motion, and Tailwind CSS for smooth animations and a sleek design.

## Screenshots

![Home Screen](./screenshots/home.png)
*Home Screen*

![Customization Screen](./screenshots/customization.png)
*Customization Screen*

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/3d-shoe-customizer.git
   cd 3d-shoe-customizer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Register your app with Firebase and add the Firebase configuration to a `firebaseConfig.js` file in the `src` directory.
   ```javascript
   // src/firebaseConfig.js
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   ```

### Running the App

1. **Start the development server**:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Register or Login**: Start by registering a new account or logging in if you already have an account.
2. **Customize Your Shoe**: Use the 3D customization tool to design your shoe. You can select different colors for various parts of the shoe.
3. **Save Customization**: Your customizations will be automatically saved to your Firebase Firestore database.
4. **Logout**: You can log out of your account by clicking the "Sign Out" button.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Three.js](https://threejs.org/) for the 3D rendering.
- [Firebase](https://firebase.google.com/) for authentication and database services.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework.

---

Thank you for using the 3D Shoe Customizer! If you have any questions or feedback, feel free to open an issue or contact us.

Happy customizing! 🎨👟

---

**Note**: Update the Firebase configuration in the provided code snippet with your actual Firebase project configuration details. Also, make sure to include screenshots in the `screenshots` directory or update the paths accordingly in the README.