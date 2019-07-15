import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistreurDeFrappeComponent } from './enregistreur-de-frappe.component';

describe('EnregistreurDeFrappeComponent', () => {
  let component: EnregistreurDeFrappeComponent;
  let fixture: ComponentFixture<EnregistreurDeFrappeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistreurDeFrappeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistreurDeFrappeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
