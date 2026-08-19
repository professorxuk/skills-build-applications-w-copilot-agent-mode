import app from './app';
import { databaseReady } from './config/database';

const port = 8000;

app.get('/api/config', (_req, res) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  res.json({
    apiUrl,
    environment: process.env.NODE_ENV || 'development',
  });
});

databaseReady.then(() => {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Octofit Tracker API running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    if (process.env.CODESPACE_NAME) {
      console.log(`Codespace: ${process.env.CODESPACE_NAME}`);
    }
  });
});