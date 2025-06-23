import { IsString, IsInt, Min, Max, Length } from 'class-validator';

export class CreateCarroDto {
  @IsString()
  @Length(2, 30)
  marca: string;

  @IsString()
  @Length(1, 30)
  modelo: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;
}
