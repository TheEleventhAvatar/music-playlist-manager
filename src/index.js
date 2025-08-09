// index.js — ES module format for Fly.io

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('🚀 Server is running on Fly.io!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
