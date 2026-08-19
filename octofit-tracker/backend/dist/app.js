"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Middleware
app.use(express_1.default.json());
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});
// API Routes
app.use('/api/users', users_1.default);
app.use('/api/teams', teams_1.default);
app.use('/api/activities', activities_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
app.use('/api/workouts', workouts_1.default);
// Codespaces-aware API URL support
app.get('/api/config', (req, res) => {
    const codespaceName = process.env.CODESPACE_NAME;
    const apiUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
    res.json({
        apiUrl,
        environment: process.env.NODE_ENV || 'development',
    });
});
// Start server
database_1.databaseReady.then(() => {
    app.listen(port, () => {
        console.log(`Octofit Tracker API running on port ${port}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        if (process.env.CODESPACE_NAME) {
            console.log(`Codespace: ${process.env.CODESPACE_NAME}`);
        }
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map