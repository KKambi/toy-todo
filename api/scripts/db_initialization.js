const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME
});

connection.connect();

//Initialize Database
connection.query('', (error, results, fields) => {
    if (error) throw error;
    console.log('The result: ', results);
    console.log('The fields: ', fields);
})

//Insert Dummy Data

connection.end();