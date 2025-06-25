import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCarroDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  año: number;

  @IsInt()
  clienteId: number;
}
