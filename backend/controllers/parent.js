const Parent = require('../schema/parentSchema');
const expressAsyncHandler = require('express-async-handler');


const createParent = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, phone, address, occupation, children } = req.body;
    const parent = new Parent({
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        occupation,
        children
    });
    const createdParent = await parent.save();
    res.status(201).json(createdParent);
});


const getParent = expressAsyncHandler(async (req, res) => {
    const parent = await Parent.findById(req.params.id);
    if (parent) {
        res.json(parent);
    } else {
        res.status(404);
        throw new Error('Parent not found');
    }
});

const getParents = expressAsyncHandler(async (req, res) => {
    const parents = await Parent.find({});
    res.json(parents);
});


const updateParent = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, phone, address, occupation, children } = req.body;
    const parent = await Parent.findById(req.params.id);
    if (parent) {
        parent.firstName = firstName;
        parent.lastName = lastName;
        parent.email = email;
        parent.password = password;
        parent.phone = phone;
        parent.address = address;
        parent.occupation = occupation;
        parent.children = children;
        const updatedParent = await parent.save();
        res.json(updatedParent);
    } else {
        res.status(404);
        throw new Error('Parent not found');
    }
});



module.exports = {
    createParent,
    getParent,
    getParents,
    updateParent
};

