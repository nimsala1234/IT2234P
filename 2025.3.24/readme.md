# 📅 2025-03-24 - Working with Student Data using Express.js

This folder contains JavaScript practicals from **March 24, 2025**.

## 📜 Lesson Overview  
In this lesson, we built an Express.js server that works with a student database stored as a JSON array.

🔹 **Data Handling with JSON Arrays**  
  - Stored student records in a JavaScript array
  - Used `module.exports` to export student data from a separate file

🔹 **Express.js API Endpoints**  
  - `GET /` → Home route for server status  
  - `GET /stu` → Returns all students  
  - `GET /stu/:id` → Returns student by Registration Number  
  - `GET /stu/gender/:gen` → Filters students by gender  
  - `GET /stu/name/:name` → Searches for a student by name  

🔹 **Additional Concepts Covered**  
  - `find()` vs `filter()` usage  
  - Basic error handling (404 response when student not found)  
  - Dynamic route parameters in Express.js

## 📂 Code Files

| File Name                | Code Explanation                                      | Output Screenshot         |
|-------------------------|-------------------------------------------------------|---------------------------|
| [`studentsdb.js`](./DB/studentsdb.js) | Contains an array of student JSON objects                     | ![DB Screenshot](./DB/db_output.png)       |
| [`app.js`](./app.js)     | Express.js server to serve student data through APIs | ![App Screenshot](./app_output.png) |

---
