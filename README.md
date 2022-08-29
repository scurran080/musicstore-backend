#### `npm init`
#### `npm install express nodemon pg`

Create db.js file
`
const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password:"password",
    host:"localhost",
    port: 5432,
    database:"dbname"
});

module.exports = pool;
`
#### `npm start`
