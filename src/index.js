import {} from 'dotenv/config';
import express from 'express';
import next from 'next';
import winston from 'winston';
import api from './api';
import path from 'path';

// Server-wide settings
winston.level = process.env.WINSTON_LEVEL || 'debug';
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './web' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// ES2015 debugging
if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

// Scaffold the server
app.prepare()
  .then(() => {
  const server = api(express());
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err
    winston.info(`> Ready on http://localhost:${port}`);
  });
})