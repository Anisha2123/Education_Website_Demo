
# 🧠 Pratibha Skill Development Center – MERN Stack Web App

A full-stack web application built for **Pratibha Skill Development Center**, which offers skill-based training programs to empower youth for employability and productivity.

Live Site: [https://pratibhadev.vercel.app](https://pratibhadev.vercel.app)

---

## 🚀 Features

### 🌐 Public Pages
- **Landing Page** with mission and CTA
- **Courses Offered** – dynamic listing from MongoDB with filtering
- **Apply for a Course** – with form and course selection
- **Testimonials** – read/add/delete testimonials
- **About Us** – vision, mission, and values
- **Contact Us** – form with email integration (Nodemailer)

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Axios
- CSS (Responsive UI)

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- CORS, Dotenv, Nodemailer

---

## 📁 Folder Structure

```
pratibha-skill-dev/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # React Components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── vite.config.js
│
├── server/                 # Node.js backend
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # Express Routes
│   ├── controllers/        # Route Controllers
│   ├── .env
│   └── index.js
│
└── README.md

```

## 📦 .env Configuration

### Backend (`server/.env`)
```
PORT=5000  
MONGO_URI=your_mongo_cluster_uri
CLIENT_URL=https://pratibhadev.vercel.app
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password  

```
### Frontend (`client/.env`)
```
VITE_REACT_APP_BACKEND_URL=https://pratibha-demo-backend.onrender.com

```

## 🧪 How to Run Locally

### 1. Clone the Repo
```
git clone https://github.com/your-username/pratibha-skill-dev.git
cd pratibha-skill-dev

```
2. Setup Backend
```
cd server
npm install
npm run dev
```
3. Setup Frontend
```
cd ../client
npm install
npm run dev

```
🌍 Deployment
Frontend: Vercel
Deployed with Vite + React

Backend: Render
Node.js server with MongoDB Atlas cluster

✨ Contributions
This project is open for contributions! Feel free to fork and PR.

📧 Contact
Made with 💜 by Anisha Birla
📬 birlaani@gmail.com


![image](https://github.com/user-attachments/assets/e9364dda-6acd-4660-8311-43547d5567c5)
![image](https://github.com/user-attachments/assets/6eb9ec88-7e26-49d0-a755-a1b5ee795453)
![image](https://github.com/user-attachments/assets/26709ec5-b4d4-461f-bb03-3dec8b2930c4)
![image](https://github.com/user-attachments/assets/efe0f4ef-d0d6-4550-8d5e-03bd6402433a)




