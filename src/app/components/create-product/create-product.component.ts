import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FocusDirective } from '../../directives/focus.directive';
import { ProductsService } from '../../services/products.service'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FocusDirective],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService, private modalService: ModalService) { }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }


  ngOnInit(): void {
  }

  submit() {
    // console.log(this.title)
    console.log(this.form.value)
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: { rate: 42, count: 1 }
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
