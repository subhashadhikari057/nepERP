const prisma = require('../config/prisma');

/** POST /tenants */
exports.createTenant = async (req, res) => {
  const { name, code, address, phone, fiscalYearStart } = req.body;

  try {
    const tenant = await prisma.Tenant.create({
      data: {
        name,
        code,
        address,
        phone,
        fiscalYearStart: fiscalYearStart ? new Date(fiscalYearStart) : null,
      },
    });
    return res.status(201).json(tenant);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
