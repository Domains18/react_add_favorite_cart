const Admin = require("../models/adminSchema");
const Community = require('../models/communitySchema');


const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public


const loginAdmin = asyncHandler(async (req, res) => {
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

const loginUser = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await Community.findOne({ email });
    if (user) {
        res.json({
            _id: user.id,
            names: user.names,
            email: user.email,
            allumni: user.allumni,
            phone: user.phone,
            otherAffiliations: user.otherAffiliations,
        });
    } else {
        res.status(500);
        throw new Error('internal error,')
    }
});

module.exports = { loginAdmin, adminInfo, loginUser };
