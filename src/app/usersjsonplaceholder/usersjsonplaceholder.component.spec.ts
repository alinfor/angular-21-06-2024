import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersjsonplaceholderComponent } from './usersjsonplaceholder.component';

describe('UsersjsonplaceholderComponent', () => {
  let component: UsersjsonplaceholderComponent;
  let fixture: ComponentFixture<UsersjsonplaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersjsonplaceholderComponent]
    });
    fixture = TestBed.createComponent(UsersjsonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
