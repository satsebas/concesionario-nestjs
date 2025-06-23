import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistorialCompra } from '../../historial-compra/entities/historial-compra.entity';

@Entity()
export class Carro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  year: number;

  @OneToMany(() => HistorialCompra, historial => historial.carro)
  compras: HistorialCompra[];
}
