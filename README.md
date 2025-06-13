# NepERP – Backend

Multi-tenant ERP backend built with **Node.js + Express** and **PostgreSQL + Prisma**.  
Covers company (tenant) onboarding, role-based access, and user management.

---

## ✨ Features (so far)

| Module  | Status | Highlights |
|---------|--------|------------|
| Tenant  | ✅ | Create companies, Nepali FY start |
| Role    | ✅ | Seeded: Admin · HR · Accountant · ProjectMgr · InventoryMgr |
| User    | ✅ | Linked to tenant & role |
| Auth    | 🚧 | Next task: bcrypt + JWT |

---

## 🏗️ Tech Stack

- **Node 18 + Express**
- **Prisma ORM** (v6) & **PostgreSQL**
- Nodemon, dotenv, bcrypt (soon), jsonwebtoken (soon)

---

## ⚡ Quick Start

```bash
# 1 Clone & install
git clone https://github.com/<you>/neperp-backend.git
cd neperp-backend
npm install

# 2 Create env
cp .env.example .env      # then edit DATABASE_URL etc.

# 3 Run migrations & seed roles
npx prisma migrate dev --name init
node src/prisma/seed.js

# 4 Start dev server
npm run dev               # http://localhost:8080



🔗 API Checklist
Method	Endpoint	Purpose
POST	/tenants	Register company
POST	/users	Create user (needs tenantId, roleId)
⏩ Next	/auth/register-company & /auth/login	


📂 Project Structure
graphql
Copy
Edit
backend/
 ├─ src/
 │   ├─ routes/        # HTTP routes
 │   ├─ controllers/   # business logic
 │   ├─ config/        # prisma client, env helpers
 │   └─ server.js      # Express entry
 ├─ prisma/
 │   ├─ schema.prisma  # DB models
 │   ├─ migrations/    # auto-generated SQL
 │   └─ seed.js        # default roles
 └─ package.json




🛣️ Roadmap
 💾 Authentication – bcrypt + JWT

 📦 Inventory module

 💰 Accounting / Finance

 📈 Dashboards & reports

 📱 Mobile PWA for field staff

yaml
Copy
Edit

*(Create an `.env.example` with placeholders so no secrets ever leak.)*

---

## 4  Commands to push the code

```bash
# 1 Initialise (if you haven’t)
git init
git add .
git commit -m "Initial commit – Tenant, Role, User modules"

# 2 Create repo on GitHub named `neperp-backend`

# 3 Connect & push
git branch -M main
git remote add origin https://github.com/<your-username>/neperp-backend.git
git push -u origin main