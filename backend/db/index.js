const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'E-Commerce API',
  password: 'Indydog789',
  port: 5432,
})


///////////// GET User

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM "nUsers" WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }








  //////////// module exports

  module.exports = {
    getUserById
  }