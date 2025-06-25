import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ClienteModule } from './cliente/cliente.module';
import { CarroModule } from './carro/carro.module';
import { RepuestoModule } from './repuesto/repuesto.module';
import { HistorialCompraModule } from './historial-compra/historial-compra.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cs: ConfigService) => ({
        type: 'mysql',
        host: cs.get('DB_HOST')!,
        port: parseInt(cs.get('DB_PORT') ?? '3306', 10),
        username: cs.get('DB_USER')!,
        password: cs.get('DB_PASS')!,
        database: cs.get('DB_NAME')!,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ClienteModule,
    CarroModule,
    RepuestoModule,
    HistorialCompraModule,
  ],
})
export class AppModule {}
