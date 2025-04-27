# 🍃 MongoDB 

## Topics
- Database Creation
- Collections
- CRUD Operations
- Queries

---

## 🧩 MongoDB Basic Terms

| Term         | Meaning |
|--------------|---------|
| **Database** | Holds collections (like a folder) |
| **Collection** | Group of documents (similar to a table) |
| **Document** | Single record (stored in BSON format) |
| **_id**      | Unique identifier auto-generated for every document |

---

## 🏗️ 1. Creating Database and Collections (Compass)

- Open **MongoDB Compass**.
- Click **Create Database**.
- Enter:
  - **Database Name**: `uniDB`
  - **Collection Name**: `students`
- Click **Create Database**.

> ![Create DB](Outputs/1.CreateDB.png)



## ✍️ 2. Inserting Documents (Compass)

- Inside the collection, click **Insert Document**.
- Add keys and values.
- Save.

> ![Insert Document](Outputs/2.InsertDoc.png)
> ![Insert Document](Outputs/3.png)

---
---

## 📝 3. Editing Documents (Compass)

- Find the document.
- Click **Edit**.
- Update values and click **Update**.

> ![Update Document](Outputs/editDoc.png)

---

## 🖥️ 4. Insert Documents (MongoDB Shell)
First show available databases and select **UniDB** and show the collections it has.(students)
![Shell](Outputs/Shell.png)

### ➔ Insert One Document
```javascript
db.students.insertOne({
  regno: "2021IT006",
  name: "Nova",
  age: 24,
  gender: "Male",
  degree: "IT",
  skills: ["JS", "MongoDB", "NodeJS"]
})
