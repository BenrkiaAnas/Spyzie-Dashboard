import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendreCapEcranComponent } from './prendre-cap-ecran.component';

describe('PrendreCapEcranComponent', () => {
  let component: PrendreCapEcranComponent;
  let fixture: ComponentFixture<PrendreCapEcranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrendreCapEcranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendreCapEcranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
