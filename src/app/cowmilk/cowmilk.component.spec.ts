import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowmilkComponent } from './cowmilk.component';

describe('CowmilkComponent', () => {
  let component: CowmilkComponent;
  let fixture: ComponentFixture<CowmilkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowmilkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowmilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
