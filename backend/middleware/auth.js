const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminSchema');


const protect = asyncHandler(async (req, res, next) => {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                try {
                        token = req.headers.authorization.split(' ')[1];
                        const decoded = jwt.verify(token, process.env.JWT_SECRET)
                        req.admin = await Admin.findById(decoded.id).select('-password')
                        next()
                } catch (error) {
                        res.status(401);
                        throw new Error("Unauthorized Access")
                        exit(1)
                }
        }
        if (!token) {
                res.status(403);
                throw new Error("Forbidden request")
        }

});
module.exports = { protect}
