import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product'

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: `./product.component.html`,
  imports: [CommonModule],
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
}
