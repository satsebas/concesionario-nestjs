import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialCompraService } from './historial-compra.service';
import { CreateHistorialCompraDto } from './dto/create-historial-compra.dto';
import { UpdateHistorialCompraDto } from './dto/update-historial-compra.dto';

@Controller('historial-compra')
export class HistorialCompraController {
  constructor(private readonly historialCompraService: HistorialCompraService) {}

  @Post()
  create(@Body() createHistorialCompraDto: CreateHistorialCompraDto) {
    return this.historialCompraService.create(createHistorialCompraDto);
  }

  @Get()
  findAll() {
    return this.historialCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historialCompraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistorialCompraDto: UpdateHistorialCompraDto) {
    return this.historialCompraService.update(+id, updateHistorialCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialCompraService.remove(+id);
  }
}
