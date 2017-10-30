import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzbrisiKomentarComponent } from './izbrisi-komentar.component';

describe('IzbrisiKomentarComponent', () => {
  let component: IzbrisiKomentarComponent;
  let fixture: ComponentFixture<IzbrisiKomentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzbrisiKomentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzbrisiKomentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
