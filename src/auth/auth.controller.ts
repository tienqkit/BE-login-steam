import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('steam')
  @UseGuards(AuthGuard('steam'))
  steamLogin() {
    return;
  }

  @Get('steam/return')
  @UseGuards(AuthGuard('steam'))
  steamReturn(@Req() req) {
    return {
      message: 'Steam login success',
      user: req.user,
    };
  }

  @Get('me')
  getMe(@Req() req) {
    return req.user || { message: 'Not logged in' };
  }
}
