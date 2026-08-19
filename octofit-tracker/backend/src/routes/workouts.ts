import { Router, Request, Response } from 'express';
import Workout from '../models/Workout';

const router = Router();

// Get all workouts
router.get('/', async (req: Request, res: Response) => {
  const workouts = await Workout.find().sort({ category: 1, difficulty: 1 }).lean();
  res.json({ message: 'Get all workouts', data: workouts });
});

// Get workout by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get workout ${id}`, data: null });
});

// Get personalized workout suggestions
router.get('/suggestions/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  const workouts = await Workout.find().sort({ difficulty: 1 }).limit(3).lean();
  res.json({ message: `Get workout suggestions for user ${userId}`, data: workouts });
});

// Create workout
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Workout created', data: req.body });
});

// Update workout
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update workout ${id}`, data: req.body });
});

// Delete workout
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete workout ${id}` });
});

export default router;
