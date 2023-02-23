const Department = require('../schema/departmentSchema');


const addDepartment = asyncHandler(async (req, res) => {
    const { departmentName, departmentCode } = req.body;
    try {
        const newDepartment = await Department.create({
            departmentName,
            departmentCode
        });
        res.status(201).json({
            success: true,
            data: newDepartment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});


const getDepartments = asyncHandler(async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json({
            success: true,
            data: departments
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

const deleteDepartment = asyncHandler(async (req, res) => {
    const department = await Department.findById(req.params.id);
    if (department) {
        await department.remove();
        res.json({ message: 'Department removed' });
    }
    else {
        res.status(404);
        throw new Error('Department not found');
    }
});

const updateDepartment = asyncHandler(async (req, res) => {
    const { departmentName, departmentCode } = req.body;
    const department = await Department.findById(req.params.id);
    if (department) {
        department.departmentName = departmentName;
        department.departmentCode = departmentCode;
        const updatedDepartment = await department.save();
        res.status(200).json({
            success: true,
            data: updatedDepartment
        });
    }
    else {
        res.status(404);
        throw new Error('Department not found');
    }
});

module.exports = {
    addDepartment,
    getDepartments,
    deleteDepartment,
    updateDepartment
};

