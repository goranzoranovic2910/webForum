import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledKategorijeComponent } from './pregled-kategorije.component';

describe('PregledKategorijeComponent', () => {
  let component: PregledKategorijeComponent;
  let fixture: ComponentFixture<PregledKategorijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledKategorijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledKategorijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
