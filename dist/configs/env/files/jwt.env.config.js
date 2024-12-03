"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const jwtConfig = () => ({
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    },
});
exports.jwtConfig = jwtConfig;
//# sourceMappingURL=jwt.env.config.js.map