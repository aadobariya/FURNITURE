const Favorite = require('../model/favorite.model');

module.exports = class FavoriteServieces {


    // ADD NEW FAVORITE
    async addNewFavorite(body) {
        try {
            return await Favorite.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET ALL FAVORITE
    async getAllFavorite(query) {
        try {
            let find = [
                { $match: { isDelete: false}}
            ];
            let result = await Favorite.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE FAVORITE
    async updateFavorite(id, body) {
        try {
            return await Favorite.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC FAVORITE
    async getFavorite(body) {
        try {
            return await Favorite.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SINGLE FAVORITE BY ID
    async getFavoriteById(id) {
        try {
            return await Favorite.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}