const Admin = require("../models/adminSchema");
const bcrypt = require("bcryptjs");


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
