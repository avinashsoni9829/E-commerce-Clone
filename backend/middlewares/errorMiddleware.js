const errorHandler = (err , req , res , next) => {
    // correct the status code   
    const statusCode = res.statusCode == 200 ? 500 : statusCode;
      // set the status code 
      res.status(statusCode);
       // send the json response
      res.json({
          message: err.message,
          stack : process.env.NODE_ENV === 'Production' ? null : err.stack
          // we only return the stack of error when we are not into production phase 
      });

};


// this is returned as a error object 

module.exports = {errorHandler};
