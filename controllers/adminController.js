const { Admin } = require('../Models')

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({});
    return res.json(admins);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (admin) {
      res.json(admin);
    } else {
      return res.json(404).send("Admin with the specified ID does not exist");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
};

const createAdmin = async (req, res) => {
  try {
    const { admin_id, userName, password } = req.body;
    const admin = await Admin.create({ admin_id, userName, password });
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatObjectById = async (req, res, collection) => {
  try {
    const { id } = req.params;
    const updateAdmin = await collection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(updateAdmin);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error! Failed to update user");
  }
};

const updateAdmin = async (req, res) => {
  updatObjectById(req, res, Admin);
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(200).send("Admin deleted successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};

