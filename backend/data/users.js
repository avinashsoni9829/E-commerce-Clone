const bcyrpt = require('bcryptjs')
const Users = [
    {
         name : "admin" ,
         email : 'admin@admin.com',
         password : bcyrpt.hashSync('123456',10),
         isAdmin : true
    },

    {
        name : "avinashsoni",
        email : 'avinashsoni@gmail.com',
        password : bcyrpt.hashSync("avinashjee",10),
        
    },
    {
         name : "abhisheksoni",
         email : 'abhisheksoni@gmail.com',
         password : bcyrpt.hashSync("abhishek",3)
    },
  
];

module.exports = Users;


