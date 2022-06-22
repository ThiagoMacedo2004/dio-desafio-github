import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTituloComponent } from './novo-titulo.component';

describe('NovoTituloComponent', () => {
  let component: NovoTituloComponent;
  let fixture: ComponentFixture<NovoTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
