const Product = require('../model/product.model');

module.exports = class ProductServices {

    // ADD NEW PRODUCT
    async addNewProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC PRODUCT
    async getProduct(body) {
        try {
            return await Product.findOne(body);      
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET PRODUCT BY ID
    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE PRODUCT
    async updateProduct(id, body) {
        try {
            return await Product.findByIdAndUpdate(id, { $set: body} , { new : true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET ALL PRODUCT
    // async getAllProducts(query) {
    //     try {
    //         let categoryWise = query.category && query.category !=="" ? [
    //             { $match: { category: query.category} }
    //         ] : [];
    //         let find = [
    //             { $match : { isDelete: false} },
    //             ...categoryWise
    //         ];

    //         let result = await Product.aggregate(find);
    //         return result;

    //     } catch (error) {
    //         console.log(error);
    //         return error.message;
    //     }
    // }

    async getAllProduct(query) {
        // Pagination
        let pageNo = parseInt(query.pageNo) || 1;
        let perPage = parseInt(query.perPage) || 2;
        let skip = (pageNo - 1) * perPage;
    
        // Sorting
        let sortConditions = {
            title: 1,
        };
    
        if (query.sortBy) {
            sortConditions = {};
            sortConditions[query.sortBy] = query.sortOrder === 'desc' ? -1 : 1;
        }
    
        // Searching
        let search =  query.search ? [
            {
                $match:{
                    $or: [
                        {
                            title: {
                                $regex: query.search.trim().replace(/\s+/g, " "),
                                $options: "i",
                            }
                        },
                        {
                            description: {
                                $regex: query.search.trim().replace(/\s+/g, " "),
                                $options: "i",
                            }
                        },
                        {
                            price: Number(query.search)
                        },
                    ]
                }
            }
        ] : [];
    
        let find = [
          {
            $match: { isDelete: false },
          },
          ...search,
          {
            $sort: sortConditions
          }
        ];
        let totalCount = await Product.aggregate([...find]);
        let result = await Product.aggregate([
          ...find,
          {
            $skip: skip,
          },
          {
            $limit: perPage,
          },
        ]);
        let totalPage = Math.ceil(totalCount.length / perPage);
        return {
          totalCount: totalCount.length,
          totalPage,
          currentPage: pageNo,
          result
        };
      }
}