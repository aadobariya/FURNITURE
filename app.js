require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();                                                // Server Create
const port = process.env.PORT;                                           
app.use(express.json()); 


// ROUTES:- 
// Admin Routes
const adminRoutes = require('./src/routes/admin/index.routes');
app.use('/api/admin', adminRoutes);

// User Routes
const usersRoute = require('./src/routes/user/index.routes');
app.use('/api/user', usersRoute);



// DATABASE COLLECTION
async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);                  // Online Database
    // await mongoose.connect('mongodb://127.0.0.1:27017/project');    // Local Database
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});


// OR //                         
                                                                      
// app.listen(7777 , async() => {                                       // Online Database
//     mongoose.connect(process.env.MONGO_DB_URL)
//     .then(() => console.log('DB is Connected'))
//     .catch(err => console.log(err.message));
//     console.log('Server start at http://localhost:7777');
// });