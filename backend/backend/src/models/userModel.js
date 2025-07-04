import pool from '../db.js';

export async function createUser(email, password_hash) {
  return (await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, role', [email, password_hash])).rows[0];
}

export async function getUserByEmail(email) {
  return (await pool.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
}

export async function getUserById(id) {
  return (await pool.query('SELECT id, email, role FROM users WHERE id = $1', [id])).rows[0];
} 