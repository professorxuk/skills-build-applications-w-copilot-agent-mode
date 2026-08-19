"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Leaderboard_1 = __importDefault(require("../models/Leaderboard"));
const router = (0, express_1.Router)();
// Get leaderboard
router.get('/', async (req, res) => {
    const leaderboard = await Leaderboard_1.default.find().populate('user', 'username name').populate('team', 'name').sort({ points: -1 }).lean();
    res.json({ message: 'Get leaderboard', data: leaderboard });
});
// Get user ranking
router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({ message: `Get ranking for user ${userId}`, data: null });
});
// Get team ranking
router.get('/team/:teamId', (req, res) => {
    const { teamId } = req.params;
    res.json({ message: `Get ranking for team ${teamId}`, data: null });
});
exports.default = router;
//# sourceMappingURL=leaderboard.js.map