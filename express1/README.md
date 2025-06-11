# Node-Express-Mongodb-Basics

Improving Backend from Basics

# Student Management API (Node.js + Express + MongoDB)

This is a basic RESTful API built using **Node.js**, **Express**, and **MongoDB**. It allows for CRUD (Create, Read, Update, Delete) operations on student data.

---

## 🚀 Features

- Create a new student
- Get all students
- Get a single student by ID
- Update a student by ID
- Delete a student by ID

---

## 📁 Project Structure

express1/
│
├── src/
│ ├── db/
│ │ └── studentdb.js # MongoDB connection
│ ├── models/
│ │ └── student.js # Mongoose schema
│ ├── routes/
│ │ └── studentRoutes.js # Student routes (CRUD)
│ └── index.js # Main entry point
│
├── package.json
└── README.md

---

## 🧑‍💻 Setup Instructions

1. **Clone the repository**
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   Install dependencies

   ```

   ```

npm install
Start MongoDB
Make sure your MongoDB is running on your local machine at mongodb://127.0.0.1:27017/Student_DB.

Run the server
npm run dev
Or use:
nodemon src/index.js

📡 API Endpoints
Method Endpoint Description
GET / Test route
POST /student Create a new student
GET /student Get all students
GET /student/:id Get a student by ID
PUT /student/:id Update a student by ID
DELETE /student/:id Delete a student by ID

📦 Sample Request (JSON)
{
"name": "Jagat Joshi",
"age": 12,
"class": "Six"
}

🔧 Tech Stack
Node.js

Express.js

MongoDB

Mongoose

🙌 Author
Jagat Joshi
