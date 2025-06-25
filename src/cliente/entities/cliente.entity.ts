import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carro } from '../../carro/entities/carro.entity';
import { HistorialCompra } from '../../historial-compra/entities/historial-compra.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @OneToMany(() => Carro, carro => carro.cliente)
  carros: Carro[];

  @OneToMany(() => HistorialCompra, hc => hc.cliente)
  historial: HistorialCompra[];
}

