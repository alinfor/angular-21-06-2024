import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiuserjavaComponent } from './apiuserjava.component';

describe('ApiuserjavaComponent', () => {
  let component: ApiuserjavaComponent;
  let fixture: ComponentFixture<ApiuserjavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiuserjavaComponent]
    });
    fixture = TestBed.createComponent(ApiuserjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
