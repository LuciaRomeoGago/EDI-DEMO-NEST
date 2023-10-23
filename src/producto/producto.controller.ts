import { Controller, Get } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
constructor (private readonly servicio: ProductoService) {}

@Get()
getProducto(): string {
    return this.servicio.getProducto();
}
}