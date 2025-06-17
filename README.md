# 📝 Task Manager - MERN Stack Application

Welcome to the **Task Manager** – a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to efficiently manage daily tasks with features like task creation, editing, prioritization, and status tracking.

---

## 🚀 Live Demo

🌐 [Live App Link](https://task-manager.bharatudyam.com)  
📦 Backend API: [API Endpoint](https://backend-task-manger.onrender.com)

---

## 📂 Project Structure
root/
├── client/ # React Frontend
│ ├── public/
│ └── src/
│   ├── API/
│   ├── components/
│   ├── pages/
│      ├── Auth/
│      ├── Dashbord/
│   ├── context/
│   ├── Hooks/
│   ├── styles/
│   ├── App.jsx/
│   ├── main.jsx/
│ └── index.html
│ └── package.json
│ └── .gitignore
│ └── .env
├── server/ # Node.js and Express.js Backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
| ├── .env
| ├── package.json
│ └── index.js
└── README.md


---

## 🧰 Tech Stack

- **Frontend**: React, React Router DOM, Axios, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Hostinger (Frontend), Render (Backend)
- **Version Control**: Git + GitHub

---

## 🔐 Features

- 🔑 User Registration & Login (JWT Auth)
- ➕ Add New Tasks
- ✏️ Edit Existing Tasks
- ✅ Mark Tasks as Completed
- ❗ Prioritize Tasks (Low, Medium, High)
- 📅 Due Date Assignment
- 🗑️ Delete Tasks
- 📊 Filter & Sort Tasks (Planned)
- 🔍 Search Tasks (Planned)

---

## 🛠️ Installation & Setup

### Prerequisites:
- REact Js
- Express.js
- Node.js
- MongoDB Atlas Account
- Git

### Clone the Repo:
```bash
git clone https://github.com/nikhilgupta-9/think-academies-task-manger.git
cd task-manager

cd server
npm install
create .env file with MONGO_URI and JWT_SECRET
npm run dev

Created by Nikhil Gupta
For suggestions or questions, reach out at iamnikhilgupta9@gmaill.com


