import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKategorijaComponent } from './lista-kategorija.component';

describe('ListaKategorijaComponent', () => {
  let component: ListaKategorijaComponent;
  let fixture: ComponentFixture<ListaKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
