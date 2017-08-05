import winston from 'winston';

export default function api(app) {
  app.get('/api/hello', (req, res) => {
    return res
      .status(200)
      .json({message: `Is it me you're looking for?`});
  });

  return app;
}