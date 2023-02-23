const mongoose = require('mongoose');
const Subjects = require('../schema/subjectSchema');
const asyncHandler = require('express-async-handler');



const addSubject = asyncHandler(async (req, res) => {
    const { subjectName, subjectCode } = req.body;
    try {
        const addSubject = await Subjects.create({
            subjectName,
            subjectCode
        });
        res.status(201).json({
            success: true,
            data: addSubject
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});


const getSubjects = asyncHandler(async (req, res) => {
    try {
        const subjects = await Subjects.find();
        res.status(200).json({
            success: true,
            data: subjects
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

const deleteSubject = asyncHandler(async (req, res) => {
    const subject = await Subjects.findById(req.params.id);
    if (subject) {
        await subject.remove();
        res.json({ message: 'Subject removed' });
    }
    else {
        res.status(404);
        throw new Error('Subject not found');
    }
});

const updateSubject = asyncHandler(async (req, res) => {
    const { subjectName, subjectCode } = req.body;
    const subject = await Subjects.findById(req.params.id);
    if (subject) {
        subject.subjectName = subjectName;
        subject.subjectCode = subjectCode;
        const updatedSubject = await subject.save();
        res.json({
            _id: updatedSubject._id,
            subjectName: updatedSubject.subjectName,
            subjectCode: updatedSubject.subjectCode
        });
    }
    else {
        res.status(404);
        throw new Error('Subject not found');
    }
});

module.exports = {
    addSubject,
    getSubjects,
    deleteSubject,
    updateSubject
}
