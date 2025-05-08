import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(profile: any) {
    return {
      steamId: profile.id,
      displayName: profile.displayName,
      avatar: profile.photos?.[0]?.value,
    };
  }
}
