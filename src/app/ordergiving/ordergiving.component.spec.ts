import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdergivingComponent } from './ordergiving.component';

describe('OrdergivingComponent', () => {
  let component: OrdergivingComponent;
  let fixture: ComponentFixture<OrdergivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdergivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdergivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
