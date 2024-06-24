import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiuserjsonplaceholderComponent } from './apiuserjsonplaceholder.component';

describe('ApiuserjsonplaceholderComponent', () => {
  let component: ApiuserjsonplaceholderComponent;
  let fixture: ComponentFixture<ApiuserjsonplaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiuserjsonplaceholderComponent]
    });
    fixture = TestBed.createComponent(ApiuserjsonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
