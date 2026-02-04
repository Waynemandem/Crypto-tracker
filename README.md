🚀 Crypto Tracker

A simple, fast crypto price tracker built with React and the CoinGecko API.
It displays real-time cryptocurrency market data with a clean UI and basic UX polish.

This project is beginner-friendly but structured like a real-world app.

🔥 Features

Live cryptocurrency data (no API key required)

Displays:

Coin name

Symbol

Current price

24-hour price change

Visual indicators for price movement (green = up, red = down)

Loading and error states

Responsive layout

Deployed on Netlify

🧠 Tech Stack

React (Vite or Create React App)

CoinGecko API

CSS (or CSS Modules)

Netlify for deployment

📡 Data Source

This app uses the public CoinGecko API:

https://api.coingecko.com/api/v3/coins/markets


No authentication required. Rate-limited, but perfect for small projects.

🗂 Project Structure
src/
├── components/
│   ├── CoinList.jsx
│   └── CoinItem.jsx
├── App.jsx
├── main.jsx
├── index.css

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/crypto-tracker.git


Navigate into the project:

cd crypto-tracker


Install dependencies:

npm install


Start the development server:

npm run dev

🏗 Build for Production
npm run build


This generates a dist/ or build/ folder depending on your setup.

🌍 Deployment (Netlify)

Push the project to GitHub

Go to Netlify → New site from Git

Select your repository

Set:

Build command: npm run build

Publish directory: dist (Vite) or build (CRA)

Deploy 🚀

📌 Key React Concepts Used

useState for managing UI state

useEffect for fetching data after render

Conditional rendering

List rendering with .map()

Component-based architecture

📈 Future Improvements

Search and filter coins

Pagination

Dark mode

Charts (Chart.js or Recharts)

Local storage caching

🧑‍💻 Author

Built by Joseph
Frontend Developer | React Learner | Builder
