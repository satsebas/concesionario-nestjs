import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Carro } from '../../carro/entities/carro.entity';
import { Repuesto } from '../../repuesto/entities/repuesto.entity';

@Entity()
export class HistorialCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date;

  @ManyToOne(() => Cliente, cliente => cliente.compras, { eager: true })
  cliente: Cliente;

  @ManyToOne(() => Carro, carro => carro.compras, { eager: true })
  carro: Carro;

  @ManyToMany(() => Repuesto, repuesto => repuesto.historiales, { eager: true })
  @JoinTable()
  repuestos: Repuesto[];
}
