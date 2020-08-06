import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSecondChildComponent } from './check-second-child.component';

describe('CheckSecondChildComponent', () => {
  let component: CheckSecondChildComponent;
  let fixture: ComponentFixture<CheckSecondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSecondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
