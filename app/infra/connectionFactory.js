var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3308,
        database: 'pdb_nodejs'
    });
}

module.exports = function() {
    return createDBConnection;
}