import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  getHello(): string {
    return 'hello ruios';
  }

  async addUser(data: User): Promise<User> {
    console.log(data);
    const user = new User();
    user.name = data.name;
    user.password = data.password;
    return await this.userRepository.save(user);
  }
}
