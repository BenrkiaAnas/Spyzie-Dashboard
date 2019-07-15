import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlockComponent } from './app-block.component';

describe('AppBlockComponent', () => {
  let component: AppBlockComponent;
  let fixture: ComponentFixture<AppBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
