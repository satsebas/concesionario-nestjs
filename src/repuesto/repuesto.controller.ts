import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RepuestoService } from './repuesto.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';

@Controller('repuestos')
export class RepuestoController {
  constructor(private readonly repuestoService: RepuestoService) {}

  @Post()
  create(@Body() dto: CreateRepuestoDto) {
    return this.repuestoService.create(dto);
  }

  @Get()
  findAll() {
    return this.repuestoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.repuestoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRepuestoDto,
  ) {
    return this.repuestoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.repuestoService.remove(id);
  }
}
