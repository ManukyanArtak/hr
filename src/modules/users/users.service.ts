import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './user.entity';

export type IUser = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  async findAll() {
    const user = await this.manager.findBy(User, {
      id: 10,
    });
    console.log(user);
    return user;
  }
  async create(userData) {
    const user = this.manager.create(User, userData);
    return this.manager.save(user);
  }

  async findByEmail(email): Promise<IUser> {
    return await this.manager.findOneBy(User, {
      email,
    });
  }
}
