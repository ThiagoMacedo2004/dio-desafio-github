import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css'],
  
})
export class TitulosComponent implements OnInit {
  
  
  options: string[] = [];
  filterOptions: string[] = []
  formGroup!: FormGroup;

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private service : ServiceService,
    private fb      : FormBuilder
  ) {}

  ngOnInit() {
    this.getNames()
    this.formulario()
  }


  formulario() {
    this.formGroup = this.fb.group({
      lojas: ['']
    })
    this.formGroup.get('lojas')!.valueChanges.subscribe(
      (response) => {
        this.filterData(response)
      }
    )
  }


  filterData(dados:string) {
    this.filterOptions = this.options.filter(
      (item) => item.toLocaleLowerCase().indexOf(dados.toLocaleLowerCase()) > -1
    )
  }

 
  getNames() {
    this.service.getData().subscribe(
      (response) => {
        this.options       = response
        this.filterOptions = response
        console.log(this.filterOptions)
      }
    )
  }
}


