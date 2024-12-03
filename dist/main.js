"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function startApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`Application is running on: http://localhost:${port}`);
}
async function bootstrap() {
    const [app, error] = await catchErrors(startApp);
    if (error) {
        common_1.Logger.error("Error starting application:", error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map