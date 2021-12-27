require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const user = require('./models/user');
const Product = require('./models/product');
const order = require('./models/order');
const products = require('./data/products');
const connectDb = require('./config/config');

dotenv.config();
connectDb();

 // first we will import data 

 const importData = async () => {
       try{
           await order.deleteMany();
           await Product.deleteMany();
           await user.deleteMany();
           // creating new user and passing dummy user data  
           const createUser = await user.insertMany(users);

           const adminUser =  createUser[0]._id

           // storing sample data for

           const sampleData = products.map(product => {
               return {
                   ...product , user : adminUser
               }
           })

           await Product.insertMany(sampleData);
           console.log("Data imported!!".green.inverse);
           proccess.exit();

       }
       catch(err){

        console.log(`${err}`.red.inverse);
        
        process.exit(1);

       }
 };

 

 const dataDestroy =  async() =>{
     try{
        await order.deleteMany();
        await product.deleteMany();
        await user.deleteMany(); 
        console.log("Data destroyed!!".green.inverse);
        process.exit();
     }
     catch(error){
        console.log(`${error}`.red.inverse);
        process.exit();
    
     }

   
 }


 if(process.argv[2] === "-d"){
     dataDestroy();
 }
 else{
     
    importData();

 }