import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

// LOCAL IMPORTS
import config from "./configs/env/env.configs";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { envValidationSchema } from "./configs/env/validation.schema";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./database/database.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes config available globally
      load: [config], // Loads our configuration
      cache: true, // Optional: enables config caching
      envFilePath: [".env.local", ".env"], // Optional: specify env files priority
      validationSchema: envValidationSchema, // Add validation schema
      validationOptions: {
        allowUnknown: true, // Allow unknown env vars
        abortEarly: true, // Stops validation on first error
      },
    }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
