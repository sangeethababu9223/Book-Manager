import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryUserHomeComponent } from './ordinary-user-home.component';

describe('OrdinaryUserHomeComponent', () => {
  let component: OrdinaryUserHomeComponent;
  let fixture: ComponentFixture<OrdinaryUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinaryUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
