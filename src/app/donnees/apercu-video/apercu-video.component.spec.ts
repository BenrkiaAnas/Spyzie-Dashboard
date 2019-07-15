import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuVideoComponent } from './apercu-video.component';

describe('ApercuVideoComponent', () => {
  let component: ApercuVideoComponent;
  let fixture: ComponentFixture<ApercuVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApercuVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
