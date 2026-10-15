
import express from 'express';
import { createApp } from './project-api.js';
import { db } from './database.js';

const app = express();

// Serve the frontend: index.html, CSS and JavaScript
app.use(express.static('public'));

// Keep the existing API routes
app.use(createApp(db));

export default app;
