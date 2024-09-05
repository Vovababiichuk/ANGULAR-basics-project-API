import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product'

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    // if (!products || !search) {
    //   return products
    // }
    if (search.length === 0) {
      return products
    }
    return products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase())
    });
  }

}
