import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTemaComponent } from './nova-tema.component';

describe('NovaTemaComponent', () => {
  let component: NovaTemaComponent;
  let fixture: ComponentFixture<NovaTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
