import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.css']
})
export class EstrelasComponent implements OnChanges {

  constructor() { }
  

  @Input()
  rating: number = 0

  estrelaWidth?: number

  ngOnChanges(): void {
   this.estrelaWidth = this.rating * 66 / 5
  }
  

}
