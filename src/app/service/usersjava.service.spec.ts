import { TestBed } from '@angular/core/testing';

import { UsersjavaService } from './usersjava.service';

describe('UsersjavaService', () => {
  let service: UsersjavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersjavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
