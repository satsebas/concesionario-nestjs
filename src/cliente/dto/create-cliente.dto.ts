import { IsString, IsEmail, Length } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @Length(2, 50)
  nombre: string;

  @IsEmail()
  email: string;
}
