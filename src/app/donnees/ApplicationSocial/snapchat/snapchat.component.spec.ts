import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapchatComponent } from './snapchat.component';

describe('SnapchatComponent', () => {
  let component: SnapchatComponent;
  let fixture: ComponentFixture<SnapchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
