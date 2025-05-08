import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(profile: {
    id: string;
    displayName: string;
    photos?: { value: string }[];
  }) {
    return {
      steamId: profile.id,
      displayName: profile.displayName,
      avatar: profile.photos?.[0]?.value,
    };
  }
}
