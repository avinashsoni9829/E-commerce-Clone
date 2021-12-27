const dotenv = require('dotenv');
dotenv.config();

const {errorHandler} = require('./middlewares/errorMiddleware');
const colors = require('colors');
const express = require('express');
const products = require('./data/products');
const cors = require('cors')
const connectDb = require('./config/config')
const productRoutes = require('./routes/productsRoutes');


// connecting to mongodb database 
connectDb();


const app = express();

// configuration of .env


app.use(cors());

const PORT = process.env.PORT || 8080;


app.get('/' , (req,res) => {
    res.send("Hello world");
    
});


app.get('/t',(req , res) => {
      res.send(products);
});


app.use('/api',productRoutes);
 
// using the error handler middleware  to check for the errors and setting the status code acc to the neeed and sending json responce

app.use(errorHandler);



app.listen(PORT,() =>{
    console.log(`App is running on ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`.red);
});


