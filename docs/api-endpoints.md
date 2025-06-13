# API Reference – NepERP

Base URL:  
http://localhost:8080



---

## 🚀 Core Endpoints (Phase 1)

| Method | Endpoint     | Body Params                                      | Auth | Description                        |
|--------|--------------|--------------------------------------------------|------|------------------------------------|
| POST   | /tenants     | `name`, `code`, `address`, `phone`, `fiscalYearStart` | ❌   | Register a new company             |
| POST   | /users       | `name`, `email`, `password`, `tenantId`, `roleId`     | ❌   | Add new user under tenant/role     |
| GET    | /users       | –                                                | 🔐   | *TODO* – List all users (same tenant) |
| POST   | /auth/register-company | *TODO*                             | ❌   | Register company + 1st admin user |
| POST   | /auth/login  | `email`, `password`                               | ❌   | Issue JWT token                    |

---

## 📌 Notes

- `tenantId` and `roleId` are used to **link users** with company + role.
- Auth endpoints will be added after implementing bcrypt & JWT in **Auth Module**.
- `GET /users` will require token auth in next phase.

---
