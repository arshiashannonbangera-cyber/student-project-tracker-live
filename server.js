import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createApp } from './project-api.js';
import { db } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const publicPath = path.join(__dirname, 'public');

// Serve static assets (CSS, JS, images)
app.use(express.static(publicPath));

// Explicit route to serve index.html for root requests
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Keep the existing API routes
app.use(createApp(db));

export default app;