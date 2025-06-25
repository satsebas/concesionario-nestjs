import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @Length(2, 100)
  nombre: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}
