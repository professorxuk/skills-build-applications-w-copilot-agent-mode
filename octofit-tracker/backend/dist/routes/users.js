"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
// Get all users
router.get('/', async (req, res) => {
    const users = await User_1.default.find().populate('team', 'name').sort({ points: -1 }).lean();
    res.json({ message: 'Get all users', data: users });
});
// Get user by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get user ${id}`, data: null });
});
// Create user
router.post('/', (req, res) => {
    res.status(201).json({ message: 'User created', data: req.body });
});
// Update user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update user ${id}`, data: req.body });
});
// Delete user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete user ${id}` });
});
exports.default = router;
//# sourceMappingURL=users.js.map