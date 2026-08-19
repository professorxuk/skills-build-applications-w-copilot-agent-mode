"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = __importDefault(require("../models/Activity"));
const router = (0, express_1.Router)();
// Get all activities
router.get('/', async (req, res) => {
    const activities = await Activity_1.default.find().populate('user', 'username name').sort({ completedAt: -1 }).lean();
    res.json({ message: 'Get all activities', data: activities });
});
// Get activity by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get activity ${id}`, data: null });
});
// Create activity
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Activity created', data: req.body });
});
// Update activity
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update activity ${id}`, data: req.body });
});
// Delete activity
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete activity ${id}` });
});
exports.default = router;
//# sourceMappingURL=activities.js.map