const util = require("util");
const mysql = require("mysql");


const pool = mysql.createPool({
    host     : "remotemysql.com",
    user     : 'B57Z0g0XjK',
    password : 'UPpxATKPw0',
    database : 'B57Z0g0XjK'
  });

  pool.getConnection((err, connection) =>{
      if(err){
          console.log(err);
      }else{
          console.log("mysql connected!");
      }
  
   if(connection){

    let sql= 'CREATE TABLE IF NOT EXISTS tasks( id int AUTO_INCREMENT, taskName VARCHAR(255), taskDate date, PRIMARY KEY (id))';

    connection.query(sql, (err, result) => {
      if(err)  throw err;
      else{
        console.log(result);
        console.log("Table Created!");
      }
      
    });  
        connection.release();
  }
});

  
  pool.query = util.promisify(pool.query);
  module.exports = pool;