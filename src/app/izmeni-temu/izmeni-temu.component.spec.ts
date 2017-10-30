import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniTemuComponent } from './izmeni-temu.component';

describe('IzmeniTemuComponent', () => {
  let component: IzmeniTemuComponent;
  let fixture: ComponentFixture<IzmeniTemuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniTemuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniTemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
