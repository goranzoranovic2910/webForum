import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledTemeComponent } from './pregled-teme.component';

describe('PregledTemeComponent', () => {
  let component: PregledTemeComponent;
  let fixture: ComponentFixture<PregledTemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledTemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledTemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
