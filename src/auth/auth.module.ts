import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SteamStrategy } from './steam.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, SteamStrategy],
})
export class AuthModule {}
