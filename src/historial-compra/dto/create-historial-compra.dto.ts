import { IsInt, Min } from 'class-validator';

export class CreateHistorialDto {
  @IsInt()
  clienteId: number;

  @IsInt()
  carroId: number;

  @IsInt()
  repuestoId: number;

  @IsInt()
  @Min(1)
  cantidad: number;

  @IsInt()
  @Min(0)
  total: number;
}
