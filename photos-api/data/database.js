const mysql = require('mysql');

const connection = mysql.createConnection({


   host: '127.0.0.1',
   user: 'admin',
   password: 'adminroot',
   database: 'Media'
})

connection.connect((errors) => {

   if(errors) {
    console.log("DB Not");
    console.log(errors);
       throw Error;
       
   }

   console.log("DB Connected Successfully");

});


module.exports = connection;