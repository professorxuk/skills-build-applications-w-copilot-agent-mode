"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = __importDefault(require("../models/Workout"));
const router = (0, express_1.Router)();
// Get all workouts
router.get('/', async (req, res) => {
    const workouts = await Workout_1.default.find().sort({ category: 1, difficulty: 1 }).lean();
    res.json({ message: 'Get all workouts', data: workouts });
});
// Get workout by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get workout ${id}`, data: null });
});
// Get personalized workout suggestions
router.get('/suggestions/:userId', async (req, res) => {
    const { userId } = req.params;
    const workouts = await Workout_1.default.find().sort({ difficulty: 1 }).limit(3).lean();
    res.json({ message: `Get workout suggestions for user ${userId}`, data: workouts });
});
// Create workout
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Workout created', data: req.body });
});
// Update workout
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update workout ${id}`, data: req.body });
});
// Delete workout
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete workout ${id}` });
});
exports.default = router;
//# sourceMappingURL=workouts.js.map