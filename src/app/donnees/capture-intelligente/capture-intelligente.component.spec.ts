import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureIntelligenteComponent } from './capture-intelligente.component';

describe('CaptureIntelligenteComponent', () => {
  let component: CaptureIntelligenteComponent;
  let fixture: ComponentFixture<CaptureIntelligenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureIntelligenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureIntelligenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
