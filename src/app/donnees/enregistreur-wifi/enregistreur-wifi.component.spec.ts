import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistreurWifiComponent } from './enregistreur-wifi.component';

describe('EnregistreurWifiComponent', () => {
  let component: EnregistreurWifiComponent;
  let fixture: ComponentFixture<EnregistreurWifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistreurWifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistreurWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
