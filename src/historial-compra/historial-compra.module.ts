import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialCompra } from './entities/historial-compra.entity';
import { HistorialCompraService } from './historial-compra.service';
import { HistorialCompraController } from './historial-compra.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialCompra])],
  controllers: [HistorialCompraController],
  providers: [HistorialCompraService],
  exports: [HistorialCompraService],
})
export class HistorialCompraModule {}
