# 🚆 East Coast Railway Admin Dashboard – Backend

This is the backend server for the East Coast Railway Admin Portal. It powers the appointment and tour management system using Node.js, Express, and MongoDB with JWT-based authentication.

## 🛠️ Tech Stack

- Node.js & Express
- MongoDB & Mongoose
- JWT Authentication
- Modular structure: MVC + Repository pattern

---

## ✅ Features

- 🔐 Admin login with secure JWT-based session
- 📆 Manage Appointments (Create, Read, Update, Delete)
- 🚗 Manage Officer Tour Programme/Leave
- 🔎 Publicly filter appointments/tours by From/To Date
- ✨ Row color logic handled via frontend based on appointment date
- ✅ Single admin user set in environment variables (no registration)

---

## 🗂️ Folder Structure

```

backend/
├── src/
│ ├── config/ # MongoDB connection config
│ │ └── db.js
│ ├── controllers/ # Route handler logic
│ │ ├── appointmentController.js
│ │ └── tourController.js
│ ├── middlewares/ # JWT verification
│ │ └── authMiddleware.js
│ ├── models/ # Mongoose schemas
│ │ ├── appointmentModel.js
│ │ └── tourModel.js
│ ├── repositories/ # Database access logic
│ │ ├── appointmentRepository.js
│ │ └── tourRepository.js
│ ├── routes/ # Express route files
│ │ ├── appointmentRoutes.js
│ │ ├── tourRoutes.js
│ │ └── authRoutes.js
│ ├── script/ # Utility/testing scripts
│ │ └── testBackendAPI.js
│ ├── index.js # Server entry point
│ └── utils/ # Token handling (optional)
│ └── tokenUtils.js
├── .env # Environment variables
├── package.json
└── README.md

```


## 📦 Setup & Installation

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/ecr-backend.git](https://github.com/ripper06/Railway-Intern-Backend.git)
cd Railway-Intern-Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a .env file in the root directory:

```env

PORT=5050
MONGO_URI = <MONGODB_URI>
JWT_SECRET= <your_super_secret_key>
ADMIN_USER=<USER_NAME>
ADMIN_PASS=<PASSWORD>
```

### 4. Running the Server

```bash

npm start

# The server will run at http://localhost:5050
```

## 📬 API Endpoints
```
# Auth
POST /api/auth/login → Login with admin credentials

# Appointments
GET /api/appointments → Public fetch all

POST /api/appointments → Admin add (JWT required)

PUT /api/appointments/:id → Admin update

DELETE /api/appointments/:id → Admin delete

# Tours
GET /api/tours → Public fetch all

POST /api/tours → Admin add (JWT required)

PUT /api/tours/:id → Admin update

DELETE /api/tours/:id → Admin delete
```

### Uthentication Notes

- This backend uses a single hardcoded admin (email + password) from the .env file.

- On login, it returns a JWT token.

- Pass this token in Authorization header as Bearer {token} to access protected routes.

### 📎 Frontend
- This backend is designed to work with the Parcel-based frontend in the frontend/ directory.

- Make sure CORS is enabled if frontend is hosted separately.

## 🧑‍💻 Author
Jyoti Ranjan Dash

Built for East Coast Railway internal dashboard
