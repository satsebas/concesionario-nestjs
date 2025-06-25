import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Carro } from '../../carro/entities/carro.entity';
import { Repuesto } from '../../repuesto/entities/repuesto.entity';

@Entity('historial_compras')
export class HistorialCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  fecha: Date;

  @ManyToOne(() => Cliente, cliente => cliente.historial, { eager: true })
  cliente: Cliente;

  @ManyToOne(() => Carro, carro => carro.historial, { eager: true })
  carro: Carro;

  @ManyToOne(() => Repuesto, repuesto => repuesto.historial, { eager: true })
  repuesto: Repuesto;

  @Column('int')
  cantidad: number;

  @Column('decimal')
  total: number;
}
