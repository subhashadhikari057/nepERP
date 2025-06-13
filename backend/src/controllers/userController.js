// src/controllers/userController.js
const prisma = require('../config/prisma');   


/** POST /users */
const createUser = async (req, res) => {
  const { name, email, password, tenantId, roleId } = req.body;

  try {
    const user = await prisma.user.create({       
      data: {
        name,
        email,
        password,
        tenant: { connect: { id: tenantId } },
        role:   { connect: { id: roleId } }
      }
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error('❌ Failed to create user:', error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser };
