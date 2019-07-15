import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LINEComponent } from './line.component';

describe('LINEComponent', () => {
  let component: LINEComponent;
  let fixture: ComponentFixture<LINEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LINEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LINEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
