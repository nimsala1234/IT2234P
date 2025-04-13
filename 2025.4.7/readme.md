# 📘 Building a RESTful Student API with Express.js

## ✅ What We Learned:

### 🔹 Creating a Student Database
- Defined an array of student objects in `studentsdb.js`.
- Each student object contains:
  - **regNo**
  - **name**
  - **gender**
  - **age**
  - **course**

---

### 🔹 Service Layer for Business Logic
- Built functions in `studentservice.js` to:
  - Get all students.
  - Find a student by `regNo`.
  - Filter students by gender.

---

### 🔹 Express Router for API Endpoints
- Created routes in `studentroute.js`:
  - `GET /student/` – fetch all students.
  - `GET /student/:id` – fetch a student by registration number.
  - `GET /student/gender/:gen` – fetch students by gender.

---

### 🔹 Connecting Everything in `index.js`
- Set up an Express server on port `3001`.
- Used `express.json()` and the student routes under `/student`.

---

## 📂 Folder Table (Inside This Lesson Folder)

| 📄 File Name              | 📘 Code Description                                        | 🖼️ Output Screenshot                |
|---------------------------|------------------------------------------------------------|-------------------------------------|
|[`studentsdb.js`](./Codes/studentsdb.js)| Contains student data as a JS array| ![Screenshot](./Outputs/1.png)  ![Screenshot](./Outputs/2.png)  ![Screenshot](./Outputs/3.png)  ![Screenshot](./Outputs/4.png)  ![Screenshot](./Outputs/5.png)  ![Screenshot](./Outputs/6.png)  ![Screenshot](./Outputs/7.png)  |
| [`studentservice.js`](./Codes/studentservice.js)| Exports functions for data handling (get, find, filter) |
| [`studentroute.js`](./Codes/studentroute.js)| Sets up routes and handles API responses| 
| [`index.js`](./Codes/index.js)| Starts the server and mounts the student route|

---
