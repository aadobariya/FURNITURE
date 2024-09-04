const User = require('../model/user.model');

module.exports = class UserServices{

    // ADD USER
    async addNewUser(body){
        try {
            return await User.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC USER
    async getUser(body){
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET USER BY ID
    async getUserById(id){
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET ALL USER
    async getAllUsers(body){
        try {
            return await User.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE USER
    async updateUser(id, body){
        try {
            return await User.findByIdAndUpdate(id, {$set: body}, {new: true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}