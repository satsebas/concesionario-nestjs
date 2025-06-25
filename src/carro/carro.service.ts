import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carro } from './entities/carro.entity';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Cliente } from '../cliente/entities/cliente.entity';

@Injectable()
export class CarroService {
  constructor(
    @InjectRepository(Carro)
    private readonly carroRepo: Repository<Carro>,
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async create(dto: CreateCarroDto): Promise<Carro> {
    const cliente = await this.clienteRepo.findOneBy({ id: dto.clienteId });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    const carro = this.carroRepo.create({ ...dto, cliente });
    return this.carroRepo.save(carro);
  }

  async findAll(): Promise<Carro[]> {
    return this.carroRepo.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Carro> {
    const carro = await this.carroRepo.findOne({
      where: { id },
      relations: ['cliente'],
    });
    if (!carro) throw new NotFoundException('Carro no encontrado');
    return carro;
  }

  async update(id: number, dto: UpdateCarroDto): Promise<Carro> {
    await this.carroRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const res = await this.carroRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Carro no encontrado');
  }
}

