# 📅 2025-04-28 - 🍃 Delete & Update Queries in MongoDB Shell

This folder contains MongoDB practicals from **April 28, 2025**.

## 📜 Lesson Overview  
In this lesson, we learned the following,
- **Update query**
- **Delete Query**
---

## 1. Delete 

### Delete a database
First Creata a database called **"SampleDB"** and a collection called **"sample"**
> ![Create DB](Outputs/1.png)
> ![Delete](Outputs/2.png)
> ![CheckDB](Outputs/3.png)

### Delete a collection
Create another database now called "checkDB" and collections sampledata1, sampledata2
![CheckDB](Outputs/4.png)

And use **db.sampledata1.drop()** to delete a specific collection
![CheckDB](Outputs/5.png)

Now, create a collection called **"degrees"** and add some documents
![CheckDB](Outputs/6.png)
```javascript
db.degrees.deleteOne({_id:ObjectId('681099adbebe01a645f7f029')})
```
![CheckDB](Outputs/7.png)

### Projections

```javascript
db.degrees.find().projection(['name'])
```
![CheckDB](Outputs/8.png)

project only the names in a proper way
```javascript
db.degrees.find({},{name:1,_id:0}).pretty()
```
![CheckDB](Outputs/9.png)

delete the degree programs which are less than 3 years in duration
```javascript
db.degrees.deleteMany({duration:{$lt:4}})
```
![CheckDB](Outputs/10.png)
![CheckDB](Outputs/11.png)

## 2. Update 

### Update a document
Add a new document which we later need to update.
![CheckDB](Outputs/12.png)

```javascript
db.degrees.updateOne({_id:ObjectId('68109de0bebe01a645f7f031')},{$set:{name:'BIT',duration:3}})
```
![CheckDB](Outputs/13.png)

Check whether the updated one is available or not.

```javascript
db.degrees.findOne({_id:ObjectId('68109de0bebe01a645f7f031')})
```
![CheckDB](Outputs/14.png)

Increase the duration of degrees with a duration of equal or greater than 4 years.

```javascript
db.degrees.updateMany({duration:{$gte:4}},{$inc:{duration:1}})
```
![CheckDB](Outputs/15.png)

Add a new element(skill) into this particular student in student collection
```javascript
db.students.updateOne({regNo:"2021BIO01"},{$push:{skills:'Coding'}})
```
![CheckDB](Outputs/16.png)

Check whether it's updated correctly.
```javascript
db.students.findOne({regNo:'2021BIO01'})
```
![CheckDB](Outputs/17.png)
