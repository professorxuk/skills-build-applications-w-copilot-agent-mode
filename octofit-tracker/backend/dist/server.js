"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const port = process.env.PORT || 8000;
database_1.databaseReady.then(() => {
    app_1.default.listen(port, () => {
        console.log(`Octofit Tracker API running on port ${port}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        if (process.env.CODESPACE_NAME) {
            console.log(`Codespace: ${process.env.CODESPACE_NAME}`);
        }
    });
});
//# sourceMappingURL=server.js.map