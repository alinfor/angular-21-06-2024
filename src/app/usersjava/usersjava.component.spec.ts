import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersjavaComponent } from './usersjava.component';

describe('UsersjavaComponent', () => {
  let component: UsersjavaComponent;
  let fixture: ComponentFixture<UsersjavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersjavaComponent]
    });
    fixture = TestBed.createComponent(UsersjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
