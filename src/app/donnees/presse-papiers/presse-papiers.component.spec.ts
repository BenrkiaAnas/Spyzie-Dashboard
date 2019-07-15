import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressePapiersComponent } from './presse-papiers.component';

describe('PressePapiersComponent', () => {
  let component: PressePapiersComponent;
  let fixture: ComponentFixture<PressePapiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressePapiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressePapiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
