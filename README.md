# 🚀 Employee Management System (Full Stack)

A full-stack web application to manage employees using modern technologies.

---

## 📌 Tech Stack

| Layer    | Technology   |
| -------- | ------------ |
| Frontend | React + Vite |
| Backend  | Spring Boot  |
| API      | REST + Axios |
| Database | MySQL        |
| Build    | Maven, npm   |

---

## 📌 Features

* ✅ Create Employee
* ✅ View All Employees
* ✅ Update Employee (PUT)
* ✅ Partial Update (PATCH)
* ✅ Delete Employee
* ✅ Clean UI with responsive design
* ✅ Confirmation before delete

---

## 🧠 Architecture

```
React UI
   ↓
Axios API Calls
   ↓
Spring Boot Controller
   ↓
Service Layer
   ↓
Repository (JPA)
   ↓
MySQL Database
```

---

## 📁 Backend Structure (Spring Boot)

```
src/main/java/com/sai/
│
├── controller/
│   └── EmployeeController.java
│
├── service/
│   ├── EmployeeService.java
│   └── impl/
│       └── EmployeeServiceImpl.java
│
├── repository/
│   └── EmployeeRepository.java
│
├── entity/
│   └── Employee.java
│
└── EmsApplication.java
```

---

## ⚙️ Backend Dependencies

Add in `pom.xml`:

* spring-boot-starter-web
* spring-boot-starter-data-jpa
* mysql-connector-j
* spring-boot-devtools *(optional)*
* lombok *(optional)*

---

## 🗄️ MySQL Configuration

### `application.properties`

```
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

---

## 🛠️ MySQL Setup

1. Install MySQL
2. Create database:

```sql
CREATE DATABASE ems;
```

3. Update credentials in `application.properties`
4. Run Spring Boot

---

## 🌐 Frontend Structure (React + Vite)

```
src/
│
├── api/
│   └── employeeService.js
│
├── components/
│   ├── EmployeeForm.jsx
│   ├── EmployeeList.jsx
│   └── EmployeeItem.jsx
│
├── utils/
│   └── constants.js
│
├── styles/
│   └── App.css
│
├── App.jsx
└── main.jsx
```

---

## 📦 Frontend Setup

```
npm create vite@latest
npm install
npm install axios
```

---

## 🔌 API Layer Example

```js
export const getAllEmployees = () => axios.get(BASE_URL);
export const createEmployee = (emp) => axios.post(BASE_URL, emp);
```

---

## 🔐 CORS Configuration

```java
@CrossOrigin(origins = "http://localhost:5173")
```

---

## ▶️ How to Run the Project

### 🖥️ Backend

```
cd backend
mvn spring-boot:run
```

Runs at:

```
http://localhost:8080
```

---

### 🌐 Frontend

```
cd frontend
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /employees      | Get all employees |
| GET    | /employees/{id} | Get by ID         |
| POST   | /employees      | Create employee   |
| PUT    | /employees/{id} | Update employee   |
| PATCH  | /employees/{id} | Partial update    |
| DELETE | /employees/{id} | Delete employee   |

---

## 🧪 Sample API Request

### Create Employee

POST `/employees`

```json
{
  "name": "Sai",
  "email": "sai@gmail.com",
  "department": "IT",
  "salary": 50000
}
```

### Response

```json
{
  "id": 1,
  "name": "Sai",
  "email": "sai@gmail.com",
  "department": "IT",
  "salary": 50000
}
```

---

## 🎨 UI Features

* Responsive layout
* Clean form UI
* Edit / Delete / Patch buttons
* Dynamic rendering

---

## 🧠 Key Concepts Used

* REST APIs
* Axios
* React Hooks (useState, useEffect)
* Component-based architecture
* Dependency Injection (Spring)
* JPA & Hibernate
* MySQL integration
* CORS

---

## ⚠️ Common Issues

### ❌ CORS Error

* Add `@CrossOrigin` in controller

### ❌ Database Error

* Check MySQL is running
* Verify credentials

### ❌ Port Conflict

* Change port in properties

---

## 📦 .gitignore

Exclude unnecessary files:

* target/
* node_modules/
* .idea/
* *.log

---

## 🚀 Future Improvements

* 🔐 Authentication (JWT)
* 🔍 Search & Filter
* 📄 Pagination
* 🎨 Tailwind UI
* 🌍 Deployment

---

## 👨‍💻 Author
SAI-SUDHEER

---

## 🎯 Project Summary

This project demonstrates full-stack development by integrating a React frontend with a Spring Boot backend using REST APIs. It showcases CRUD operations, API design, state management, and database integration using MySQL with clean architecture.
