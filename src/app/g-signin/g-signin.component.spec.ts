import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSigninComponent } from './g-signin.component';

describe('GSigninComponent', () => {
  let component: GSigninComponent;
  let fixture: ComponentFixture<GSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
