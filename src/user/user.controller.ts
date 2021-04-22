import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('first')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('ruios')
  getHello(): string {
    return this.userService.getHello();
  }
}
