import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistorialCompra } from '../../historial-compra/entities/historial-compra.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => HistorialCompra, historial => historial.cliente)
  compras: HistorialCompra[];
}
