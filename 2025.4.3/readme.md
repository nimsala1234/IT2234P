# 📘 File Handling & Promises in Node.js

## ✅ What We Learned:

### 🔹 Basic File Reading with Callback
- Used `fs.readFile()` to read the contents of `file.txt`.
- Handled errors using the **callback pattern**.
- Demonstrated asynchronous behavior in Node.js.

---

### 🔹 Understanding Promises
- Introduced **Promises** as a modern way to handle asynchronous operations.
- Explained promise states:
  - **Pending**: Initial state
  - **Resolved**: Operation completed
  - **Rejected**: Operation failed

---

### 🔹 Reading Files using Promises
- Used `fs.promises.readFile()` to return a promise.
- Handled results using `.then()` and `.catch()` syntax.

---

### 🔹 Async / Await with File Reading
- Utilized `async` function and `await` for clean and readable async code.
- Used `Promise.allSettled()` to read multiple files (`file.txt` and `data.txt`) simultaneously.
- Displayed each promise's:
  - **value**
  - **status**

---

## 📂 Folder Table (Inside This Lesson Folder)

| 📄 File Name         | 📘 Code Description                                                | 🖼️ Output Screenshot |
|----------------------|--------------------------------------------------------------------|-----------------------|
| `01-callback-read.js` | Reading file using `fs.readFile()` with callback                  | ![Screenshot](screenshots/01-callback-read.png) |
| `02-promise-read.js`  | Reading file using Promises (`.then()` / `.catch()`)              | ![Screenshot](screenshots/02-promise-read.png)  |
| `03-async-await.js`   | Reading multiple files using `async/await` and `Promise.allSettled()` | ![Screenshot](screenshots/03-async-await.png)   |

---

### 📝 To Run:
Make sure you have Node.js installed.

```bash
node 01-callback-read.js
node 02-promise-read.js
node 03-async-await.js

