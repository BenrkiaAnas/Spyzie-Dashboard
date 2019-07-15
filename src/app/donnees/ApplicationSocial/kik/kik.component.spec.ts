import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KikComponent } from './kik.component';

describe('KikComponent', () => {
  let component: KikComponent;
  let fixture: ComponentFixture<KikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
