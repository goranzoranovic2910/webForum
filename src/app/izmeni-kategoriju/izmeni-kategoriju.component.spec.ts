import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniKategorijuComponent } from './izmeni-kategoriju.component';

describe('IzmeniKategorijuComponent', () => {
  let component: IzmeniKategorijuComponent;
  let fixture: ComponentFixture<IzmeniKategorijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniKategorijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniKategorijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
