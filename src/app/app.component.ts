import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';

import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarOverviewExample } from './components/header/header.component';
import { FilterProductsPipe } from "./pipes/filter-products.pipe";
import { ModalComponent } from "./components/modal/modal.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ProductComponent,
    NavigationComponent,
    CurrencyPipe,
    GlobalErrorComponent,
    MatToolbarModule,
    MatIconModule,
    ToolbarOverviewExample,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
