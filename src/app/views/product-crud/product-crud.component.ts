import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  navegateToCreate(): void {

    this.router.navigate(["products/create"]);
  }
}
