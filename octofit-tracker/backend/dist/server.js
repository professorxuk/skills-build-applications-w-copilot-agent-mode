"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const port = 8000;
app_1.default.get('/api/config', (_req, res) => {
    const codespaceName = process.env.CODESPACE_NAME;
    const apiUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
    res.json({
        apiUrl,
        environment: process.env.NODE_ENV || 'development',
    });
});
database_1.databaseReady.then(() => {
    app_1.default.listen(port, '0.0.0.0', () => {
        console.log(`Octofit Tracker API running on port ${port}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        if (process.env.CODESPACE_NAME) {
            console.log(`Codespace: ${process.env.CODESPACE_NAME}`);
        }
    });
});
//# sourceMappingURL=server.js.map