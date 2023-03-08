const Admin = require("../models/adminSchema");
const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public


const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (user && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            name: admin.names,
            email: admin.email,
        });

    } else {
        res.status(400);
        throw new Error('Invalid credentials, Acces denied');
    }
});


const adminInfo = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});


module.exports = { login, adminInfo };
