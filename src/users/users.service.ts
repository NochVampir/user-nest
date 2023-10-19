import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO, UpdateUserDTO } from './types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create({ firstName, lastName }: CreateUserDTO) {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  remove(id: number): void {
    this.usersRepository.delete(id);
  }

  update(id: number, payload: UpdateUserDTO) {
    return this.usersRepository.update({id},{id,...payload});
  }
}
