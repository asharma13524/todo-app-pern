const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "asharma",
    password: "PSQL135",
    host: "localhost",
    database: "todopern",
    port: 5432,
});

module.exports = pool;
