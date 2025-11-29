🌦️ Weather App

A modern and responsive Weather App built using React, Vite, and TailwindCSS.
This project demonstrates practical knowledge in API integration, React Hooks, state management, and UI/UX design.

🚀 Features

Search for any city and retrieve current weather data instantly

Display temperature, humidity, and wind speed

Dynamic weather icons based on the condition

Temporary error messages for invalid input or failed requests

Fully responsive design for mobile and desktop

Clean, maintainable, and scalable code structure

🛠️ Technologies Used

React (Functional Components & Hooks)

Vite (Fast build and development environment)

TailwindCSS (Utility-first CSS framework)

JavaScript (ES6+)

OpenWeatherMap API

Responsive Web Design

setTimeout for UI interactions

📚 What I Learned
1️⃣ React Hooks

Utilized useState to manage weather data and error messages.

Applied useRef for direct access to input elements without unnecessary re-renders.

Implemented useEffect to fetch default city data on component mount.

2️⃣ API Integration

Fetched data from OpenWeatherMap API with proper handling of HTTP errors.

Processed JSON response to extract relevant information.

Implemented fallback logic for unknown or missing weather icons.

3️⃣ Error Handling & UX

Displayed error messages temporarily using setTimeout.

Handled scenarios like empty input, invalid city names, and network failures.

4️⃣ Dynamic Icon Mapping

Created an object mapping weather codes to corresponding icons for clean and maintainable code.

5️⃣ Responsive Design

Designed the app to work seamlessly on mobile, tablet, and desktop using TailwindCSS utilities.

6️⃣ Modern Dev Environment

Leveraged Vite for a fast development workflow.

Integrated TailwindCSS efficiently with React for rapid styling.

📂 Project Structure
src/
├── assets/ # All icons and images
├── components/
│ └── Weather.jsx
├── App.jsx
├── main.jsx
├── index.css
└── App.css

⚡ Getting Started

Clone the repository:

git clone <repo-url>

Create a .env file and add your OpenWeatherMap API key:

VITE_APP_ID=your_api_key_here

Install dependencies:

npm install

Start the development server:

npm run dev

🎯 Summary

This Weather App is more than just a simple project — it showcases:

Clean coding practices

Practical React skills

API integration with error handling

Responsive and user-friendly interface
