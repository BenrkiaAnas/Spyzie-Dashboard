import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsDarretComponent } from './temps-darret.component';

describe('TempsDarretComponent', () => {
  let component: TempsDarretComponent;
  let fixture: ComponentFixture<TempsDarretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempsDarretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsDarretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
