const mysql = require('mysql');

const connection = mysql.createConnection({


   host: 'photogallery.cjnvxhyn21ul.us-east-2.rds.amazonaws.com',
  
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
