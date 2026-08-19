import app from './app';
import { databaseReady } from './config/database';

const port = process.env.PORT || 8000;

databaseReady.then(() => {
  app.listen(port, () => {
    console.log(`Octofit Tracker API running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    if (process.env.CODESPACE_NAME) {
      console.log(`Codespace: ${process.env.CODESPACE_NAME}`);
    }
  });
});