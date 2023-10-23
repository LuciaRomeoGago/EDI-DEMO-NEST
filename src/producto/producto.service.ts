import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    getProducto(): string {
        return 'Hello World! Clase EDI';
      }
    }

