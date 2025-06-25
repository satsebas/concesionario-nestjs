// src/historial-compra/historial-compra.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialCompra } from './entities/historial-compra.entity';
import { Cliente } from '../cliente/entities/cliente.entity';
import { Carro } from '../carro/entities/carro.entity';
import { Repuesto } from '../repuesto/entities/repuesto.entity';
import { HistorialService } from './historial-compra.service';
import { HistorialController } from './historial-compra.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistorialCompra, Cliente, Carro, Repuesto]),
  ],
  providers: [HistorialService],
  controllers: [HistorialController],
})
export class HistorialCompraModule {}
