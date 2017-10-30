import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKomentaraComponent } from './lista-komentara.component';

describe('ListaKomentaraComponent', () => {
  let component: ListaKomentaraComponent;
  let fixture: ComponentFixture<ListaKomentaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaKomentaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaKomentaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
