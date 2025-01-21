import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngdesignComponent } from './angdesign.component';

describe('AngdesignComponent', () => {
  let component: AngdesignComponent;
  let fixture: ComponentFixture<AngdesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngdesignComponent]
    });
    fixture = TestBed.createComponent(AngdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
