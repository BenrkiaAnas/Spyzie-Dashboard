import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QQComponent } from './qq.component';

describe('QQComponent', () => {
  let component: QQComponent;
  let fixture: ComponentFixture<QQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
