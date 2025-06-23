import { Injectable } from '@nestjs/common';
import { CreateHistorialCompraDto } from './dto/create-historial-compra.dto';
import { UpdateHistorialCompraDto } from './dto/update-historial-compra.dto';

@Injectable()
export class HistorialCompraService {
  create(createHistorialCompraDto: CreateHistorialCompraDto) {
    return 'This action adds a new historialCompra';
  }

  findAll() {
    return `This action returns all historialCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historialCompra`;
  }

  update(id: number, updateHistorialCompraDto: UpdateHistorialCompraDto) {
    return `This action updates a #${id} historialCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} historialCompra`;
  }
}
