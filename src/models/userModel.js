
const pool = require("../config/db");

const createUser = async (username, email, hashedPassword) => {
  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  await pool.query(query, [username, email, hashedPassword]);
};

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = ?";
  const [rows] = await pool.query(query, [email]);
  return rows[0];
};

module.exports = { createUser, findUserByEmail };
