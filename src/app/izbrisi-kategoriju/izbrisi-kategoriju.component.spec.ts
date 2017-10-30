import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzbrisiKategorijuComponent } from './izbrisi-kategoriju.component';

describe('IzbrisiKategorijuComponent', () => {
  let component: IzbrisiKategorijuComponent;
  let fixture: ComponentFixture<IzbrisiKategorijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzbrisiKategorijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzbrisiKategorijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
