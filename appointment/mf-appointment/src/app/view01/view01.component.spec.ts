import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View01Component } from './view01.component';

describe('View01Component', () => {
  let component: View01Component;
  let fixture: ComponentFixture<View01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
