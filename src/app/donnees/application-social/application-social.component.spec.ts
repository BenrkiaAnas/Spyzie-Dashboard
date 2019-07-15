import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSocialComponent } from './application-social.component';

describe('ApplicationSocialComponent', () => {
  let component: ApplicationSocialComponent;
  let fixture: ComponentFixture<ApplicationSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
