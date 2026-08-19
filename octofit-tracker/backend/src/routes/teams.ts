import { Router, Request, Response } from 'express';
import Team from '../models/Team';

const router = Router();

// Get all teams
router.get('/', async (req: Request, res: Response) => {
  const teams = await Team.find().populate('members', 'username name points').sort({ totalPoints: -1 }).lean();
  res.json({ message: 'Get all teams', data: teams });
});

// Get team by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get team ${id}`, data: null });
});

// Create team
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Team created', data: req.body });
});

// Update team
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update team ${id}`, data: req.body });
});

// Delete team
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete team ${id}` });
});

export default router;
