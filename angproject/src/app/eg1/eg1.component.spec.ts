import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg1Component } from './eg1.component';

describe('Eg1Component', () => {
  let component: Eg1Component;
  let fixture: ComponentFixture<Eg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eg1Component]
    });
    fixture = TestBed.createComponent(Eg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
