import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviKomentarComponent } from './novi-komentar.component';

describe('NoviKomentarComponent', () => {
  let component: NoviKomentarComponent;
  let fixture: ComponentFixture<NoviKomentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviKomentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviKomentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
