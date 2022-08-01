import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
