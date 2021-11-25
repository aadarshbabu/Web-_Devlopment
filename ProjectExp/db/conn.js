var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'todo'
})

con.connect((error) => {
    if (error) {
        console.log("DataBase is not connected.");
        console.log(error)
    }
});
con.query("use todo");
con.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})


module.exports = con;