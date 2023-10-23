import { Controller, Get, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
constructor (private readonly servicio: ProductoService) {}

@Get(':id')
getProducto(@Param('id') id): string {
    return this.servicio.getProducto(id);
}
}