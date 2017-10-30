import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzbrisiTemuComponent } from './izbrisi-temu.component';

describe('IzbrisiTemuComponent', () => {
  let component: IzbrisiTemuComponent;
  let fixture: ComponentFixture<IzbrisiTemuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzbrisiTemuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzbrisiTemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
