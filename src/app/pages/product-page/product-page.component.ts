import { Component } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../../components/product/product.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductComponent,
    ModalComponent,
    FilterProductsPipe,
    CreateProductComponent,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  title = 'angular-crash-course';
  // products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>;
  term = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
