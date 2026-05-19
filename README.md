
# WTWR Frontend

WTWR, short for What to Wear, is a full stack weather based wardrobe app that helps users decide what clothing to wear based on current weather conditions.

This repository contains the React frontend for the WTWR application. The frontend connects to a deployed Express and MongoDB backend, uses real time weather data, and allows users to register, log in, manage their profile, add clothing items, delete their own items, and like or unlike wardrobe pieces.

## Live Project

Frontend: https://www.quemepongo.baselinux.net  
Backend API: https://api.quemepongo.baselinux.net  
Backend Repository: https://github.com/beamendivil/se_project_express  
Project Pitch Video: https://drive.google.com/file/d/1YO0qHTFBgcfvCzdzvFkXXmg_7fUn3d9p/view?usp=sharing  

## Portfolio Summary

WTWR is a full stack application built to demonstrate frontend and backend integration, user authentication, protected routes, API communication, and dynamic UI behavior.

The app uses current weather data to recommend clothing based on temperature. Users can create an account, sign in, update their profile, add clothing items to their wardrobe, delete items they own, and like or unlike items.

## Features

* Real time weather data using the OpenWeatherMap API
* Clothing recommendations based on weather conditions
* User registration and login
* JWT based authentication
* Protected profile route
* Add new clothing items
* Delete user owned clothing items
* Like and unlike clothing items
* Edit user profile information
* Temperature toggle between Fahrenheit and Celsius
* Responsive layout
* Modal based user interactions
* API connection to Express backend

## Technologies Used

* React
* Vite
* JavaScript
* React Router
* CSS
* OpenWeatherMap API
* REST API integration
* JWT authentication
* Local Storage

## Related Backend

This frontend connects to the WTWR backend API.

Backend Repository: https://github.com/beamendivil/se_project_express  
Production API: https://api.quemepongo.baselinux.net  

The backend handles authentication, users, clothing items, likes, validation, and database persistence.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/beamendivil/se_project_react.git
```

Navigate into the project folder:

```bash
cd se_project_react
```

Install dependencies:

```bash
npm install
```

Create an environment file if needed:

```bash
touch .env
```

Add the backend API URL:

```env
VITE_API_URL=http://localhost:3001
```

For production, use:

```env
VITE_API_URL=https://api.quemepongo.baselinux.net
```

Start the development server:

```bash
npm run dev:client
```

Open the local URL shown in the terminal.

## Available Scripts

```bash
npm run dev:client
```

Starts the Vite development server.

```bash
npm run build
```

Builds the frontend for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint to check code quality.

```bash
npm run deploy
```

Deploys the built frontend.

## Project Structure

```txt
src/
├── assets/
├── blocks/
├── components/
│   ├── AddItemModal/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── Profile.jsx
│   ├── WeatherCard.jsx
│   ├── ItemCard.jsx
│   ├── ItemModal.jsx
│   ├── LoginModal.jsx
│   ├── RegisterModal.jsx
│   ├── EditProfileModal.jsx
│   ├── DeleteConfirmationModal.jsx
│   └── ProtectedRoute.jsx
├── contexts/
│   ├── CurrentTemperatureUnitContext.js
│   └── CurrentUserContext.js
├── hooks/
│   └── useForm.js
├── utils/
│   ├── api.js
│   ├── auth.js
│   ├── constants.js
│   └── weatherApi.js
└── vendor/
```

## Main User Flow

1. The app loads current weather data.
2. Clothing items are fetched from the backend.
3. The user can browse clothing recommendations based on weather.
4. A user can register or log in.
5. Authenticated users can access their profile page.
6. Users can add wardrobe items.
7. Users can delete items they own.
8. Users can like or unlike items.
9. Users can update their profile.

## Weather Logic

The app categorizes weather into three types:

* Hot
* Warm
* Cold

Clothing items are filtered and recommended based on the current weather category.

## API Communication

The frontend communicates with the backend using a centralized API utility file. The base URL is configured with:

```js
const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
```

This allows the app to run locally during development and connect to the deployed API in production.

## Authentication

Authentication is handled with JWT tokens.

After a user logs in, the token is stored in local storage. The app checks the token to keep the user signed in and protect private routes such as the profile page.

## Future Improvements

* Add loading states for all form submissions
* Improve form validation messages
* Add user friendly error handling
* Add screenshots to this README
* Improve accessibility for modals and buttons
* Add test coverage
* Add more detailed weather based recommendation logic
* Add saved outfit suggestions
* Add user wardrobe categories

## What I Learned

While building this frontend, I practiced connecting a React application to a backend API, managing authenticated user state, using protected routes, handling forms, building reusable modal components, integrating weather data, and creating a more dynamic user experience.

This project helped strengthen my understanding of full stack application flow, API communication, deployment, and user centered interface design.

## Author

Bea Mendivil  
GitHub: https://github.com/beamendivil

## License

This project is available for educational and portfolio purposes.













