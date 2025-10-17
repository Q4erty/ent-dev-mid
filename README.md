# ENTERPRISE-DEVELOPMENT-MIDTERM

> **Empowering Seamless Task Management at Scale**  
> Built with the best of modern web and backend technologies.

![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3-brightgreen?logo=springboot)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)
![MySQL](https://img.shields.io/badge/MySQL-8.0-lightgrey?logo=mysql)
![Build](https://img.shields.io/badge/Build-Maven%20%7C%20Gradle-red?logo=apachemaven)
![Frontend](https://img.shields.io/badge/Frontend-Vite%20%7C%20React-61dafb?logo=react)
![Backend](https://img.shields.io/badge/Backend-SpringBoot-green?logo=spring)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📚 Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

---

## 🧩 Overview

`ent-dev-mid` is a modular full-stack application combining multiple microservices (Spring Boot) and a modern frontend built on React + Vite.  
It leverages **PostgreSQL** and **MySQL** for data persistence and is structured to scale both horizontally and vertically.

### ✨ Key Features
- ✅ Modular architecture (frontend + backend separation)
- 🚀 Spring Boot REST API services
- 💾 PostgreSQL & MySQL database integration
- ⚡ Fast frontend build via Vite
- 🧠 Modern state management (React Hooks)
- 🧰 Gradle and Maven support

---

## 🏗 Project Structure

```

ent-dev-mid/
│
├── backend/
│   ├── orm-api/              # Spring Boot app using Maven
│   ├── sql-api/              # Spring Boot app using Gradle
│
│
├── frontend/
│   ├── vite.config.js
│   ├── src/
│   └── package.json
│
└── README.md

````

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Java 21+](https://adoptium.net/)
- [Node.js 20+](https://nodejs.org/)
- [Maven](https://maven.apache.org/)
- [Gradle](https://gradle.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)

---

### Installation

Clone the repository:
```bash
git clone git@github.com:Q4erty/ent-dev-mid.git
````

Navigate into the project directory:

```bash
cd ent-dev-mid
```

#### Backend Setup (Gradle)

```bash
cd backend/orm-api
gradle build
```

#### Backend Setup (Maven)

```bash
cd backend/sql-api
mvn install
```

#### Frontend Setup (Vite)

```bash
cd frontend
npm install
```

---

## 🧠 Usage

### Run Backend (Maven)

```bash
cd backend/orm-api
mvn spring-boot:run
```

### Run Backend (Gradle)

```bash
cd backend/sql-api
gradle bootRun
```

### Run Frontend (Vite + React)

```bash
cd frontend
npm run dev
```

After running all services, visit:

```
http://localhost:5173
```

---

## 🧪 Testing

### Using Maven

```bash
mvn test
```

### Using Gradle

```bash
gradle test
```

### Using npm

```bash
npm test
```

---

### 🧭 Repository

🔗 **GitHub:** [Q4erty/ent-dev-mid](https://github.com/Q4erty/ent-dev-mid)
