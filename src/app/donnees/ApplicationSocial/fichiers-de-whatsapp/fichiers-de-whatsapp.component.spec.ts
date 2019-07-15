import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichiersDeWhatsappComponent } from './fichiers-de-whatsapp.component';

describe('FichiersDeWhatsappComponent', () => {
  let component: FichiersDeWhatsappComponent;
  let fixture: ComponentFixture<FichiersDeWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichiersDeWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichiersDeWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
