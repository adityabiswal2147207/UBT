//gettinf express from the modules
const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');


//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const buddiesRoutes = require('./routes/buddies/auth');
const partnerRoutes = require('./routes/partner/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

//creating an app out of express
const app = express();

//environment variable
env.config();


//mongodb connection
//mongodb+srv://adityabiswal:<password>@cluster0.on3j7rt.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.on3j7rt.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true
    }
    ).then(()=>{
        console.log('Database Connected');
    });

app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',buddiesRoutes);
app.use('/api',partnerRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);




//On this port will be listening to the server
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
});