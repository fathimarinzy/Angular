import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg2Component } from './eg2.component';

describe('Eg2Component', () => {
  let component: Eg2Component;
  let fixture: ComponentFixture<Eg2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eg2Component]
    });
    fixture = TestBed.createComponent(Eg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
