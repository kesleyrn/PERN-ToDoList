const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgress",
  password: "kg",
  host: "localhost",
  port: 5432,
  database: "perntodolist", 
});

module.exports = pool;
