import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { CarroModule } from './carro/carro.module';
import { RepuestoModule } from './repuesto/repuesto.module';
import { HistorialCompraModule } from './historial-compra/historial-compra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        console.log('Conectando a MySQL con:', {
          host: config.get('DB_HOST', 'no-host'),
          port: config.get('DB_PORT', 'no-port'),
          user: config.get('DB_USER', 'no-user'),
          pass: config.get('DB_PASS', 'no-pass'),
          db:   config.get('DB_NAME', 'no-db'),
        });
        return {
          type: 'mysql' as const,
          host: config.get<string>('DB_HOST', 'localhost'),
          port: +config.get<string>('DB_PORT', '3306'),
          username: config.get<string>('DB_USER', 'root'),
          password: config.get<string>('DB_PASS', ''),    // fallback a ''
          database: config.get<string>('DB_NAME', 'concesionario'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),

    ClienteModule,
    CarroModule,
    RepuestoModule,
    HistorialCompraModule,
  ],
})
export class AppModule {}

