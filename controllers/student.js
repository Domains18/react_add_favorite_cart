const Student = require('../schema/studentSchema'); 
const expressAsyncHandler = require('express-async-handler');

const addStudent = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, address, admissionNumber, prevSchool, grade, age, allergies, medicalConditions, parentName, parentEmail, parentPhone, career, parentTeacher, subjects, year } = req.body;
    
    if (!firstName || !lastName || !address || !prevSchool || !grade || !age || !allergies || !medicalConditions || !parentName || !parentEmail || !parentPhone || !career || !parentTeacher || !subjects || !year || !admissionNumber) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }
    const checkStudent = await Student.findOne({ admissionNumber });
    switch (checkStudent) {
        case null:
            const student = await Student.create({
                firstName,
                lastName,
                address,
                admissionNumber,
                prevSchool,
                grade,
                age,
                allergies,
                medicalConditions,
                parentName,
                parentEmail,
                parentPhone,
                career,
                parentTeacher,
                subjects,
                year
            });
            if (student) {
                res.status(201).json({
                    _id: student._id,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    address: student.address,
                    admissionNumber: student.admissionNumber,
                    prevSchool: student.prevSchool,
                    grade: student.grade,
                    age: student.age,
                    allergies: student.allergies,
                    medicalConditions: student.medicalConditions,
                    parentName: student.parentName,
                    parentEmail: student.parentEmail,
                    parentPhone: student.parentPhone,
                    career: student.career,
                    parentTeacher: student.parentTeacher,
                    subjects: student.subjects,
                    year: student.year
                });
            }
            break;
    }
});


const getStudents = expressAsyncHandler(async (req, res) => {
    const students = await Student.find({});
    res.json(students);
});
const getStudentByAdmissionNumber = expressAsyncHandler(async (req, res) => {
    const student = await Student.findOne({ admissionNumber: req.params.admissionNumber });
    if (student) {
        res.json(student);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});
const updateStudent = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, address, admissionNumber, prevSchool, grade, age, allergies, medicalConditions, parentName, parentEmail, parentPhone, career, parentTeacher, subjects, year } = req.body;
    const student = await Student.findOne({ admissionNumber: req.params.admissionNumber });
    if (student) {
        student.firstName = firstName;
        student.lastName = lastName;
        student.address = address;
        student.admissionNumber = admissionNumber;
        student.prevSchool = prevSchool;
        student.grade = grade;
        student.age = age;
        student.allergies = allergies;
        student.medicalConditions = medicalConditions;
        student.parentName = parentName;
        student.parentEmail = parentEmail;
        student.parentPhone = parentPhone;
        student.career = career;
        student.parentTeacher = parentTeacher;
        student.subjects = subjects;
        student.year = year;
        const updatedStudent = await student.save();
        res.json({
            _id: updatedStudent._id,
            firstName: updatedStudent.firstName,
            lastName: updatedStudent.lastName,
            address: updatedStudent.address,
            admissionNumber: updatedStudent.admissionNumber,
            prevSchool: updatedStudent.prevSchool,
            grade: updatedStudent.grade,
            age: updatedStudent.age,
            allergies: updatedStudent.allergies,
            medicalConditions: updatedStudent.medicalConditions,
            parentName: updatedStudent.parentName,
            parentEmail: updatedStudent.parentEmail,
            parentPhone: updatedStudent.parentPhone,
            career: updatedStudent.career,
            parentTeacher: updatedStudent.parentTeacher,
            subjects: updatedStudent.subjects,
            year: updatedStudent.year
        });
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});
module.exports = {
    addStudent,
    getStudents,
    getStudentByAdmissionNumber,
    updateStudent
};
