"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envValidationSchema = void 0;
const Joi = require("joi");
exports.envValidationSchema = Joi.object({
    PORT: Joi.number().default(3000),
    NODE_ENV: Joi.string()
        .valid("development", "production", "test")
        .default("development"),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.number().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRATION: Joi.string().required(),
});
//# sourceMappingURL=validation.schema.js.map