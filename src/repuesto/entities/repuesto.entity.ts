import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistorialCompra } from '../../historial-compra/entities/historial-compra.entity';

@Entity('repuestos')
export class Repuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('decimal')
  precio: number;

  @OneToMany(() => HistorialCompra, hc => hc.repuesto)
  historial: HistorialCompra[];
}
