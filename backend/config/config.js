const mongoose = require('mongoose');
const colors = require('colors');
const connectDb = async() => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI , {
              
               useUnifiedTopology: true,
               UseNewUrlParser : true,
             

        })

        console.log(`Db connected at  ${conn.connection.host}` .blue);
        
    } catch (error) {

        console.error(`Error : ${error.message}`.yellow);
        // connection exit 
        process.exit(1);        
    }
}


module.exports = connectDb;


