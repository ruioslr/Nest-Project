import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('ruios')
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('add')
  async add(@Body() data): Promise<User> {
    return this.userService.addUser(data);
  }

  @Get('list')
  async list(@Query() query) {
    return this.userService.findAll();
  }
}
