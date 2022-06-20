import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View03Component } from './view03.component';

describe('View03Component', () => {
  let component: View03Component;
  let fixture: ComponentFixture<View03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
