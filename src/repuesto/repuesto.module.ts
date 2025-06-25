import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repuesto } from './entities/repuesto.entity';
import { RepuestoService } from './repuesto.service';
import { RepuestoController } from './repuesto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Repuesto])],
  providers: [RepuestoService],
  controllers: [RepuestoController],
})
export class RepuestoModule {}

