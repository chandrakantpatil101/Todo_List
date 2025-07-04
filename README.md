# 📝 TodoList Backend

A simple Node.js + Express.js + MongoDB backend for managing todos. This backend provides RESTful APIs to create, read, update, and delete todos.

## 🚀 Features

- Add new todo
- Get all todos
- Update a todo
- Delete a todo

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv

---

## 📂 Project Structure
<pre>
TodoList-Backend/
│
├── controllers/
│   └── todoController.js
│
├── models/
│   └── todoModel.js
│
├── routes/
│   └── todoRoutes.js
│
├── config/
│   └── database.js
│
├── .env
├── .gitignore
├── package.json
└── index.js
</pre>  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/TodoList-Backend.git
cd TodoList-Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a \`.env\` file in the root folder and add:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

✅ If you're using **MongoDB Atlas**, paste your cluster URI in place of \`your_mongodb_connection_string\`.

---

## ▶️ How to Run the Project

### Development Mode (with auto-restart using nodemon)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will start at:

```
http://localhost:5000
```

---

## 📬 Available API Endpoints

| Method | Endpoint                               | Description          |
|--------|----------------------------------------|----------------------|
| POST   | /api/v1/createTodo                     | Create a new todo    |
| GET    | /api/v1/getTodo                        | Get all todos        |
| GET    | /api/v1/getTodo/:id                    | Get a single todo    |
| PUT    | /api/v1/updateTodo/:id                 | Update a todo by ID  |
| DELETE | /api/v1/updateTodo/:id                 | Delete a todo by ID  |

---

## 📝 Sample Requests

### 1️⃣ Create a Todo (POST)
```
POST http://localhost:3000/api/v1/createTodo
Content-Type: application/json

{
    "title": "1st todo",
    "description": "1st task reminder"
}
```

### 2️⃣ Get All Todos (GET)
```
GET http://localhost:3000/api/v1/getTodo
```

### 3️⃣ Get Single Todo by ID (GET)
```
GET http://localhost:3000/api/v1/getTodo/{id}
```

### 4️⃣ Update Todo by ID (PUT)
```
PUT http://localhost:3000/api/v1/updateTodo/{id}
Content-Type: application/json

{
    "title": "updated todo",
    "description": "update done by me"
}
```

### 5️⃣ Delete Todo by ID (DELETE)
```
DELETE http://localhost:3000/api/v1/updateTodo/{id}
```

---

## 💡 Notes

- Make sure MongoDB is running locally or provide a valid MongoDB Atlas connection string.
- You can use **Postman** or **Thunder Client** to test the API.

---

## 🙌 Contribution

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

[MIT](LICENSE)
