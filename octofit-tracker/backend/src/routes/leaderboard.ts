import { Router, Request, Response } from 'express';
import Leaderboard from '../models/Leaderboard';

const router = Router();

// Get leaderboard
router.get('/', async (req: Request, res: Response) => {
  const leaderboard = await Leaderboard.find().populate('user', 'username name').populate('team', 'name').sort({ points: -1 }).lean();
  res.json({ message: 'Get leaderboard', data: leaderboard });
});

// Get user ranking
router.get('/user/:userId', (req: Request, res: Response) => {
  const { userId } = req.params;
  res.json({ message: `Get ranking for user ${userId}`, data: null });
});

// Get team ranking
router.get('/team/:teamId', (req: Request, res: Response) => {
  const { teamId } = req.params;
  res.json({ message: `Get ranking for team ${teamId}`, data: null });
});

export default router;
