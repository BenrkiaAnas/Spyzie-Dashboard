import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLiteComponent } from './facebook-lite.component';

describe('FacebookLiteComponent', () => {
  let component: FacebookLiteComponent;
  let fixture: ComponentFixture<FacebookLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
