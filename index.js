require('dotenv/config');
const express = require('express');
const next = require('next');
const winston = require('winston');
const api = require('./api');
const path = require('path');
const conf = require('./client/next.config');

// Server-wide settings
winston.level = process.env.WINSTON_LEVEL || 'debug';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf, dir: './client' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// Scaffold the server
async function startServer() {
  await app.prepare();
  const server = await api(express());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    winston.info(`> Ready on http://localhost:${port}`);
  });
}

// Start the server
startServer();
