import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';
import { Cliente } from '../cliente/entities/cliente.entity';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carro, Cliente]),
  ],
  providers: [CarroService],
  controllers: [CarroController],
})
export class CarroModule {}
