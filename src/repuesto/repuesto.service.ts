import { Injectable } from '@nestjs/common';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';

@Injectable()
export class RepuestoService {
  create(createRepuestoDto: CreateRepuestoDto) {
    return 'This action adds a new repuesto';
  }

  findAll() {
    return `This action returns all repuesto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repuesto`;
  }

  update(id: number, updateRepuestoDto: UpdateRepuestoDto) {
    return `This action updates a #${id} repuesto`;
  }

  remove(id: number) {
    return `This action removes a #${id} repuesto`;
  }
}
