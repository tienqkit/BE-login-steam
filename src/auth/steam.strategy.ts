import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    const options = {
      returnURL: 'http://localhost:3000/auth/steam/return',
      realm: 'http://localhost:3000/',
      apiKey: 'A043C1DF91F4683ABD31A537F0943470',
    };
    super(options);
  }
  validate(
    identifier: string,
    profile: { id: string; displayName: string; photos?: { value: string }[] },
    done: (
      error: Error | null,
      user?: { steamId: string; displayName: string; avatar?: string },
    ) => void,
  ) {
    const user = {
      steamId: profile.id,
      displayName: profile.displayName || 'Unknown',
      avatar: profile.photos?.[0]?.value,
    };
    done(null, user);
  }
}
