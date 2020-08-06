const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Maverickp2v",
    host: "localhost",
    port: 5431,
    database: "jp_f"
});

module.exports = pool;