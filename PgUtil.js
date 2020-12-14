const pgp = require('pg-promise')(/* initialization options */);

const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'sangram',
    user: 'xdba',
    password: 'sangram'
};
const db = pgp(cn); // database instance;


var PgUtil = {
     executeQuery: async function (sqlQuery, callback) {
        var result = await db.any(sqlQuery)
        console.log(result);
        callback(null,result)
    },

    executeNonQuery: async function (sqlQuery, callback) {
        var result = await db.none(sqlQuery)
        console.log(result);
        callback(null,result)
    }
}

module.exports = PgUtil

