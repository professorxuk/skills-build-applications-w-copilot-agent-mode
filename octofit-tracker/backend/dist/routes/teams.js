"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = __importDefault(require("../models/Team"));
const router = (0, express_1.Router)();
// Get all teams
router.get('/', async (req, res) => {
    const teams = await Team_1.default.find().populate('members', 'username name points').sort({ totalPoints: -1 }).lean();
    res.json({ message: 'Get all teams', data: teams });
});
// Get team by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get team ${id}`, data: null });
});
// Create team
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Team created', data: req.body });
});
// Update team
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update team ${id}`, data: req.body });
});
// Delete team
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete team ${id}` });
});
exports.default = router;
//# sourceMappingURL=teams.js.map