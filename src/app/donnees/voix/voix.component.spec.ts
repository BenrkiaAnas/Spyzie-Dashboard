import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoixComponent } from './voix.component';

describe('VoixComponent', () => {
  let component: VoixComponent;
  let fixture: ComponentFixture<VoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
