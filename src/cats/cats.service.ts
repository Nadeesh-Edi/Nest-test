import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  cats = new Array<Cat>();

  create(createCatDto: CreateCatDto) {
    try {
      const id = Math.random()
      const created = new Cat(createCatDto.name, createCatDto.type, createCatDto.age, id);
      this.cats.push(created);
      return created;
    } catch (err) {
      throw new HttpException('Error', HttpStatus.NOT_IMPLEMENTED)
    }
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find(cat => cat.id === id);
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
