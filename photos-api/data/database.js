const mysql = require('mysql');

const connection = mysql.createConnection({


   host: 'photogallery.cjnvxhyn21ul.us-east-2.rds.amazonaws.com',
   user: 'admin',
   password: 'adminroot',
   database: 'PhotoGallery'
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