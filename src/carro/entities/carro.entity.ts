// src/carro/entities/carro.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { HistorialCompra } from '../../historial-compra/entities/historial-compra.entity';

@Entity('carros')
export class Carro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  marca: string;

  @Column({ length: 50 })
  modelo: string;

  @Column('int')
  año: number;

  @ManyToOne(() => Cliente, cliente => cliente.carros, { onDelete: 'SET NULL' })
  cliente: Cliente;

  @OneToMany(() => HistorialCompra, hc => hc.carro)
  historial: HistorialCompra[];
}
