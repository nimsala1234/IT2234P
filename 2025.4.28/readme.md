# 📅 2025-04-24 - 🍃 MongoDB 

This folder contains MongoDB practicals from **April 24, 2025**.

## 📜 Lesson Overview  
In this lesson, we learned the following,
- **Database Creation**
- **Collections**
- **CRUD Operations**
- **Queries**

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
  regno: "2021IT06",
  name: "Jake",
  age: 24,
  gender: "Male",
  degree: "IT",
  skills: ["JS", "MongoDB", "NodeJS"]
})
```
![insertOne](Outputs/insertOne.png)

### ➔ Insert many documents
```javascript
db.students.insertMany([
  {
    regno: "2021IT07",
    name: "Kevin",
    age: 24,
    gender: "Male",
    degree: "IT",
    skills: ["Java", "MongoDB", "MySQL"]
  },
  {
    regno: "2021IT08",
    name: "Erica",
    age: 20,
    gender: "Female",
    degree: "IT",
    skills: ["Python", "MongoDB", "NodeJS"]
  }
])
```
![insertMany](Outputs/insertMany.png)

### ➔ Adding a field to an existing document

- Find the document.
- Click **Edit**.
- Click **Add a field** (the + mark).
- Add the new field and the value and click **Update**.
  
![Add a new field](Outputs/addField.png)

# 📚 MongoDB Query Collection – Student Database

Each query demonstrates specific MongoDB operations such as filtering, sorting, array handling, and combined conditions.
---

# Queries using MongDB Shell

## 📌 Basic Retrieval 

```js
// Find all female students
db.students.find({ gender: "female" })
```
![insertMany](Outputs/findFemale.png)

```
// Find the first student whose gender is female
db.students.findOne({ gender: "female" })
```
![insertMany](Outputs/findOne.png)

```
// Find one student by exact name
db.students.findOne({ name: "Yumi" })
```
![insertMany](Outputs/byName.png)

## 🔍 Comparison Operators

```
// Students older than 23
db.students.find({ age: { $gt: 23 } })
```
![insertMany](Outputs/older1.png)
![insertMany](Outputs/older2.png)

```
// Students exactly 23 years old
db.students.find({ age: { $eq: 23 } })
```
![insertMany](Outputs/exact.png)

```
// Students NOT 23 years old
db.students.find({ age: { $ne: 23 } })
```
![insertMany](Outputs/notAge1.png)
![insertMany](Outputs/notAge2.png)

## 🧠 Skill-Based Queries
```
// Students with MongoDB skill
db.students.find({ skills: { $in: ["MongoDB"] } })
```
![insertMany](Outputs/mongoSkill.png)
![insertMany](Outputs/mongoSkill2.png)

```
// Students with either Matlab or MongoDB
db.students.find({ skills: { $in: ["Matlab", "MongoDB"] } })
```
![insertMany](Outputs/skillsOr1.png)
![insertMany](Outputs/skillsOr2.png)

```
// Students without both Matlab and MongoDB
db.students.find({ skills: { $nin: ["Matlab", "MongoDB"] } })
```
![insertMany](Outputs/None.png)
```
// Students with Java skill, sorted by descending age
db.students.find({ skills: { $in: ["MongoDB"] } }).sort({ age: -1 })
```
![insertMany](Outputs/des1.png)
![insertMany](Outputs/des2.png)

## 📊 Sorting Queries

```
// Sort all students by GPA (ascending)
db.students.find().sort({ GPA: 1 })
```
![insertMany](Outputs/asc1.png)
![insertMany](Outputs/asc2.png)
![insertMany](Outputs/asc3.png)

```
// Sort all students by GPA (descending)
db.students.find().sort({ gpa: -1 })
```
![insertMany](Outputs/gpa1.png)
![insertMany](Outputs/gpa2.png)
![insertMany](Outputs/gpa3.png)

```
// IT students sorted by GPA (descending)
db.students.find({ degree: "Agri" }).sort({ gpa: -1 })
```
![insertMany](Outputs/gpa4.png)

```
// Male students sorted by age (descending)
db.students.find({ gender: "Male" }).sort({ age: -1 })
```
![insertMany](Outputs/maleAge1.png)

```
// Male IT students sorted by age (descending)
db.students.find({ gender: "Male", degree: "IT" }).sort({ age: -1 })
```
![insertMany](Outputs/maleAge.png)

# 💡 Projecting Data Using Compass

![insertMany](Outputs/compass1.png)

## 🔃 Sorting Data Using Compass
![insertMany](Outputs/compass2.png)

## 🔼 Greater Than -> $gt
![insertMany](Outputs/compass3.png)

## 🔽 Less Than -> $lt
![insertMany](Outputs/compass4.png)

## 🟰 Equal -> $eq
![insertMany](Outputs/compass5.png)

## ❌ Not Equal -> $ne
![insertMany](Outputs/compass6.png)

## 📥 Matches any in array -> $in
![insertMany](Outputs/compass7.png)

## 🚫📥 Doesn't match any in array -> $nin
![insertMany](Outputs/compass8.png)
