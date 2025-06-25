import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repuesto } from './entities/repuesto.entity';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';

@Injectable()
export class RepuestoService {
  constructor(
    @InjectRepository(Repuesto)
    private readonly repuestoRepo: Repository<Repuesto>,
  ) {}

  async create(dto: CreateRepuestoDto): Promise<Repuesto> {
    const rep = this.repuestoRepo.create(dto);
    return this.repuestoRepo.save(rep);
  }

  async findAll(): Promise<Repuesto[]> {
    return this.repuestoRepo.find();
  }

  async findOne(id: number): Promise<Repuesto> {
    const rep = await this.repuestoRepo.findOneBy({ id });
    if (!rep) throw new NotFoundException('Repuesto no encontrado');
    return rep;
  }

  async update(id: number, dto: UpdateRepuestoDto): Promise<Repuesto> {
    await this.repuestoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const res = await this.repuestoRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Repuesto no encontrado');
  }
}
