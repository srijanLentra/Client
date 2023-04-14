import { TestBed } from '@angular/core/testing';

import { FindPincodeService } from './find-pincode.service';

describe('FindPincodeService', () => {
  let service: FindPincodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPincodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
