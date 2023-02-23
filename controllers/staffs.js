const express = require('express');
const Staff = require('../schema/staffSchema');
const expressAsyncHandler = require('express-async-handler');

// Path: controllers/staffs.js
//add, update, get and delete staffs
//access public

const getStaff = expressAsyncHandler(async (req, res) => {
    try {
        const staffs = await Staff.find();
        res.status(200).json(staffs);
    } catch (error) {
        
    }
});

const addStaff = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, role, department } = req.body;

    switch (!firstName || !lastName || !email || !phone || !role || !department) {
        case true:
            res.status(400).json({ message: 'Please fill all the fields' });
            break;
        case false:
            try {
                const validateUser = await Staff.findOne({ email });
                switch (validateUser) {
                    case true:
                        res.status(400).json({ message: 'User already exist' });
                        break;
                    case false:
                        const staff = await Staff.create({
                            firstName,
                            lastName,
                            email,
                            phone,
                            role,
                            department
                        });
                        if(staff){
                            res.status(201).json({
                                _id: staff.id,
                                firstName: staff.firstName,
                                lastName: staff.lastName,
                                email: staff.email,
                                phone: staff.phone,
                                role: staff.role,
                                department: staff.department
                            });
                        } else {
                            res.status(400).json({ message: 'Invalid user data' });
                        }
                        break;
                    default:
                        res.status(403);
                }
            } catch (error) {
                res.status(500).json({ message: 'Server error' });
            }
    }
})

const getStaffById = expressAsyncHandler(async (req, res) => {
    const staff = await Staff.findById(req.params.id);
    if(staff){
        res.status(200).json(staff);
    } else {
        res.status(404).json({ message: 'Staff not found' });
    }
});

const updateStaff = expressAsyncHandler(async (req, res) => {
    const staff = await Staff.findById(req.params.id);

    switch (staff) {
        case false:
            res.status(404).json({ message: 'Staff not found' });
            break;
        case true:
            const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedStaff);
    }
});


const deleteStaff = expressAsyncHandler(async (req, res) => {
    const staff = await Staff.findById(req.params.id);
    switch (staff) {
        case false:
            res.status(404).json({ message: 'Staff not found' });
            break;
        case true:
            await staff.remove();
            res.json({ message: 'Staff removed' });
            break;
    }
});


module.exports = {
    getStaff,
    addStaff,
    getStaffById,
    updateStaff,
    deleteStaff
}
