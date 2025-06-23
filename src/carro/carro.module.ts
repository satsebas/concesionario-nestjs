import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  controllers: [CarroController],
  providers: [CarroService],
  exports: [CarroService],
})
export class CarroModule {}
