const mysql = require('mysql2')

//create a pool of simultaneoous connections; can connect at the exact same time
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'albumdb'
})

module.exports = pool