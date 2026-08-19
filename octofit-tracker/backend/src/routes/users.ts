import { Router, Request, Response } from 'express';
import User from '../models/User';

const router = Router();

// Get all users
router.get('/', async (req: Request, res: Response) => {
  const users = await User.find().populate('team', 'name').sort({ points: -1 }).lean();
  res.json({ message: 'Get all users', data: users });
});

// Get user by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get user ${id}`, data: null });
});

// Create user
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({ message: 'User created', data: req.body });
});

// Update user
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update user ${id}`, data: req.body });
});

// Delete user
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete user ${id}` });
});

export default router;
