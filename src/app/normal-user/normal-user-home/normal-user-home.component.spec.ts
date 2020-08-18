import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserHOmeComponent } from './normal-user-home.component';

describe('NormalUserHOmeComponent', () => {
  let component: NormalUserHOmeComponent;
  let fixture: ComponentFixture<NormalUserHOmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalUserHOmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalUserHOmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
