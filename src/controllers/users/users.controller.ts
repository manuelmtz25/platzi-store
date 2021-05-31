import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('mma')
  getUserMMA(): string {
    return 'Manuel Mtz';
  }
}
