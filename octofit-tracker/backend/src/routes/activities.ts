import { Router, Request, Response } from 'express';
import Activity from '../models/Activity';

const router = Router();

// Get all activities
router.get('/', async (req: Request, res: Response) => {
  const activities = await Activity.find().populate('user', 'username name').sort({ completedAt: -1 }).lean();
  res.json({ message: 'Get all activities', data: activities });
});

// Get activity by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get activity ${id}`, data: null });
});

// Create activity
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Activity created', data: req.body });
});

// Update activity
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update activity ${id}`, data: req.body });
});

// Delete activity
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete activity ${id}` });
});

export default router;
