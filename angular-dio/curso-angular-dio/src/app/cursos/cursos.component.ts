import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosServices } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosServices: CursosServices) { }

  _filtrandoCursos: Curso[] = []
  _cursos :Curso[] = []

  _filtrarPor: string = ''

  ngOnInit(): void {
    this.listarCursos()
    this._filtrandoCursos = this._cursos
  }

  listarCursos() {
    this._cursos = this.cursosServices.retornarCursos()
  }

  set filtro(value: string) {
    this._filtrarPor = value
    this._filtrandoCursos = this._cursos.filter((curso: Curso) => curso.name.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1)
  }

  get filtro() {
    return this._filtrarPor
  }

}
