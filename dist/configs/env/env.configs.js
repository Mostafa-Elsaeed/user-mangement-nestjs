"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_env_config_1 = require("./files/app.env.config");
const db_env_config_1 = require("./files/db.env.config");
const jwt_env_config_1 = require("./files/jwt.env.config");
exports.default = () => ({
    ...app_env_config_1.appConfig,
    ...(0, db_env_config_1.databaseConfig)(),
    ...(0, jwt_env_config_1.jwtConfig)(),
});
//# sourceMappingURL=env.configs.js.map