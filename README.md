# 📊 India Data Hub Dashboard

🔗 **Live Demo:**  
https://stupendous-sundae-e35c52.netlify.app/

---

## 📌 Project Description

India Data Hub Dashboard is a responsive React.js web application that allows users to explore and switch between multiple economic datasets such as **Economic Monitor** and **IMF Dataset**.

The application demonstrates clean UI design, authentication-based navigation, responsive layout, and performance handling for large datasets.

---

## ✨ Key Features

- 🔐 **Authentication Flow**
  - Login page with public navbar
  - Dashboard accessible after login
  - Logout functionality

- 📂 **Multiple Dataset Support**
  - Economic Monitor (`response1.json`)
  - IMF Dataset (`response2.json`)

- 🔁 **Dataset Switching**
  - Switch datasets from dashboard navbar

- 📊 **Dashboard Layout**
  - Sidebar for categories
  - Data table for frequent indicators

- 📄 **Pagination**
  - Displays 10 records per page

- 📱 **Responsive Navbar**
  - Desktop: Full navbar with search & menu
  - Mobile (≤ 750px): Hamburger menu

- ⚡ **Performance Optimized**
  - Handles large datasets efficiently

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **State Management:** Context API
- **Styling:** CSS
- **Data Source:** Static JSON
- **Deployment:** Netlify

---

## 📁 Project Structure

src/
├── components/
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── DataTable.jsx
│   └── Pagination.jsx
│
├── pages/
│   ├── LoginPage.jsx
│   └── Dashboard.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── data/
│   ├── response1.json
│   └── response2.json
│
├── App.jsx
├── main.jsx
└── index.css



## 1 Clone the repository
git clone :-https://github.com/amanraj98523/India-Data-Hub.git

## 2 Navigate to the project directory
cd india-data-hub-ui

## 3 Install dependencies
npm install

## 4 Start the development server
npm run dev
