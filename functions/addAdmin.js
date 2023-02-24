const Teacher = require('../schema/teacherSchema');
const adminSchema = require('../schema/admin/adminSchema');
const expressAsyncHandler = require('express-async-handler');

const addTeacherAdmin = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
});
