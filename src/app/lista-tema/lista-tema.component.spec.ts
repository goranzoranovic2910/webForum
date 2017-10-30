import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTemaComponent } from './lista-tema.component';

describe('ListaTemaComponent', () => {
  let component: ListaTemaComponent;
  let fixture: ComponentFixture<ListaTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
