import { IsInt, IsArray, ArrayNotEmpty, ArrayUnique } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHistorialCompraDto {
  @IsInt()
  @Type(() => Number)
  clienteId: number;

  @IsInt()
  @Type(() => Number)
  carroId: number;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @Type(() => Number)
  repuestosIds: number[];
}
