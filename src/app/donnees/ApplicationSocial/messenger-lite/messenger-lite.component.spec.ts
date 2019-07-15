import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerLiteComponent } from './messenger-lite.component';

describe('MessengerLiteComponent', () => {
  let component: MessengerLiteComponent;
  let fixture: ComponentFixture<MessengerLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
