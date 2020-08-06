import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFirstChildComponent } from './check-first-child.component';

describe('CheckFirstChildComponent', () => {
  let component: CheckFirstChildComponent;
  let fixture: ComponentFixture<CheckFirstChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFirstChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
