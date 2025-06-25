import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([Cliente]) ],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}

