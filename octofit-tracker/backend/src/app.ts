import express, { Express, Request, Response } from 'express';
import { databaseReady } from './config/database';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

const app: Express = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

// Codespaces-aware API URL support
app.get('/api/config', (req: Request, res: Response) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  res.json({
    apiUrl,
    environment: process.env.NODE_ENV || 'development',
  });
});

// Start server
databaseReady.then(() => {
  app.listen(port, () => {
    console.log(`Octofit Tracker API running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    if (process.env.CODESPACE_NAME) {
      console.log(`Codespace: ${process.env.CODESPACE_NAME}`);
    }
  });
});

export default app;
