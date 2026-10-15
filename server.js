
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createApp } from './project-api.js';
import { db } from './database.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(createApp(db));

export default app;
