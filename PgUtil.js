var pg = require("pg");
const pool = new pg.Pool({
    host: '127.0.0.1',
    user: 'xdba',
    database: 'xplay',
    password: 'sangram',
    port: 5432
});


var PgUtil = {
    executeQuery: function (sqlQuery, callback) {
        pool.connect(function (err, client, done) {
            if (err) {
                callback(err, null)
            } else {
                client.query(sqlQuery, function (error, result) {
                    done();
                    if (error) {
                        callback(error, null)
                    } else {
                        callback(null, result)
                    }

                })
            }

        })
    }
}

module.exports = PgUtil