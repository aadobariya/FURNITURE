const express = require('express');
const userRoutes = express.Router();
const { adminVerifyToken } = require('../../helpers/userVerifyToken');
const {
    registerAdmin,
    loginAdmin,
    getAllAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin,
    updatePassword
} = require('../../Controller/Admin/admin.controller');

// REGISTER ADMIN
userRoutes.post('/register-Admin',registerAdmin);

// LOGIN ADMIN
userRoutes.post('/login-Admin',loginAdmin);

// GET ALL ADMIN
userRoutes.get('/get-All-Admin',adminVerifyToken, getAllAdmin);

// GET SPECIFIC ADMIN
userRoutes.get('/get-Admin',adminVerifyToken, getAdmin);

// UPDATE ADMIN
userRoutes.put('/update-Admin',adminVerifyToken, updateAdmin);

// DELETE ADMIN
userRoutes.delete('/delete-Admin',adminVerifyToken, deleteAdmin);

// UPDATE PASSWORD
userRoutes.put('/update-Password',adminVerifyToken, updatePassword);

module.exports = userRoutes; 