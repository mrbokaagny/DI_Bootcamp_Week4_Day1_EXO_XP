import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product  = { name : 'Document Angular' , price : 15000}

  constructor() { }

  ngOnInit(): void {
  }

}
