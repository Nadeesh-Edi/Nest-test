import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepository.create({ ...createUserDto, createdAt: new Date() })
      return this.userRepository.save(newUser);
    } catch (err) {
      throw new HttpException('Error', HttpStatus.NOT_IMPLEMENTED)
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, { ...updateUserDto });
  }

  async remove(id: number) {
    try {
      await this.userRepository.delete(id);
      return `Successfully deleted`;
    } catch (err) {
      throw new HttpException('Error', HttpStatus.NOT_IMPLEMENTED)
    }
  }
}
