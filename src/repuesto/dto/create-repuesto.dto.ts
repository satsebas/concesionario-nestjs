import { IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRepuestoDto {
  @IsString()
  nombre: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  precio: number;
}
