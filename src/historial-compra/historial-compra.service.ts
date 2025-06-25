import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialCompra } from './entities/historial-compra.entity';
import { CreateHistorialDto } from './dto/create-historial-compra.dto';
import { UpdateHistorialDto } from './dto/update-historial-compra.dto';
import { Cliente } from '../cliente/entities/cliente.entity';
import { Carro } from '../carro/entities/carro.entity';
import { Repuesto } from '../repuesto/entities/repuesto.entity';

@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(HistorialCompra)
    private readonly historialRepo: Repository<HistorialCompra>,
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
    @InjectRepository(Carro)
    private readonly carroRepo: Repository<Carro>,
    @InjectRepository(Repuesto)
    private readonly repuestoRepo: Repository<Repuesto>,
  ) {}

  async create(dto: CreateHistorialDto): Promise<HistorialCompra> {
    const [cliente, carro, repuesto] = await Promise.all([
      this.clienteRepo.findOneBy({ id: dto.clienteId }),
      this.carroRepo.findOneBy({ id: dto.carroId }),
      this.repuestoRepo.findOneBy({ id: dto.repuestoId }),
    ]);
    if (!cliente || !carro || !repuesto) {
      throw new NotFoundException('Alguno de los recursos no existe');
    }
    const hist = this.historialRepo.create({
      cliente,
      carro,
      repuesto,
      cantidad: dto.cantidad,
      total: dto.total,
    });
    return this.historialRepo.save(hist);
  }

  async findAll(): Promise<HistorialCompra[]> {
    return this.historialRepo.find();
  }

  async findOne(id: number): Promise<HistorialCompra> {
    const hist = await this.historialRepo.findOneBy({ id });
    if (!hist) throw new NotFoundException('Registro no encontrado');
    return hist;
  }

  async update(id: number, dto: UpdateHistorialDto): Promise<HistorialCompra> {
    await this.historialRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const res = await this.historialRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Registro no encontrado');
  }
}
