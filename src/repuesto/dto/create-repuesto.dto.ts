import { IsString, IsNumber, Min } from 'class-validator';

export class CreateRepuestoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @Min(0)
  precio: number;
}
