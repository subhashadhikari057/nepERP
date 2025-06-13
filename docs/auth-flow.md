# 🔐 NepERP Authentication Flow (Planning)

This document outlines how authentication will be implemented in a secure and scalable way.

---

## 🔑 Technologies

- **bcrypt**: for password hashing
- **JWT (JSON Web Tokens)**: for token-based auth
- **Prisma**: for DB interactions
- **Middleware**: to protect private routes

---

## 👥 User Signup

### 1. Register Company (Tenant + Admin)
Endpoint: `POST /auth/register-company`

- Input: Company info + admin user (email, password)
- Backend will:
  - Create a Tenant
  - Create a Role ("Admin" if not already)
  - Create a User with that tenantId & roleId
  - Hash password before saving

---

### 2. Login
Endpoint: `POST /auth/login`

- Input: `email`, `password`
- Backend will:
  - Validate user by email
  - Compare password using bcrypt
  - Issue JWT containing:
    - `userId`
    - `tenantId`
    - `roleId`
    - expiry (`1h`)

---

## 🔒 Middleware

**`authMiddleware.js`**

- Verifies token from headers
- Decodes and attaches user info to `req.user`
- Used in private routes (e.g. `/users`, `/projects`, etc.)

---

## 🧪 Token Sample (JWT Payload)

```json
{
  "userId": 8,
  "tenantId": 2,
  "roleId": 1,
  "iat": 1718297210,
  "exp": 1718300810
}


📝 TODO
 Setup /auth/register-company

 Add /auth/login

 Install bcrypt + jwt

 Create auth middleware


