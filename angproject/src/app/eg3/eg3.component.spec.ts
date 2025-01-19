import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg3Component } from './eg3.component';

describe('Eg3Component', () => {
  let component: Eg3Component;
  let fixture: ComponentFixture<Eg3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eg3Component]
    });
    fixture = TestBed.createComponent(Eg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
