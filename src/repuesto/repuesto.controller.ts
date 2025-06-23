import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepuestoService } from './repuesto.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';

@Controller('repuesto')
export class RepuestoController {
  constructor(private readonly repuestoService: RepuestoService) {}

  @Post()
  create(@Body() createRepuestoDto: CreateRepuestoDto) {
    return this.repuestoService.create(createRepuestoDto);
  }

  @Get()
  findAll() {
    return this.repuestoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repuestoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepuestoDto: UpdateRepuestoDto) {
    return this.repuestoService.update(+id, updateRepuestoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repuestoService.remove(+id);
  }
}
