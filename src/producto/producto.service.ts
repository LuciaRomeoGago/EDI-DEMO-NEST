import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    getProducto(id): string {
        return 'Hello World! Clase EDI : ' + id;
      }
    }

