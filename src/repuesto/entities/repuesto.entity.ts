import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { HistorialCompra } from '../../historial-compra/entities/historial-compra.entity';

@Entity()
export class Repuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal')
  precio: number;

  @ManyToMany(() => HistorialCompra, historial => historial.repuestos)
  historiales: HistorialCompra[];
}
