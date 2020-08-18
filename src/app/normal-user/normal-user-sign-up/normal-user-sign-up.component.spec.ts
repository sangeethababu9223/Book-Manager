import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserSignUpComponent } from './normal-user-sign-up.component';

describe('NormalUserSignUpComponent', () => {
  let component: NormalUserSignUpComponent;
  let fixture: ComponentFixture<NormalUserSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalUserSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalUserSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
