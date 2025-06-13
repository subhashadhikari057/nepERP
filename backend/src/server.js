const express = require('express');
const cors = require('cors');
require('dotenv').config();

const tenantRoutes = require('./routes/tenantRoutes');
const userRoutes  = require('./routes/userRoutes');

const app = express();

// ────── middleware ──────
app.use(cors());
app.use(express.json());

// health-check
app.get('/', (_req, res) => res.json({ message: 'NepERP backend is running ✅' }));

// route mounting
app.use('/tenants', tenantRoutes);
app.use('/users',   userRoutes);

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
