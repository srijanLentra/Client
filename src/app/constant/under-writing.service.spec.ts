import { TestBed } from '@angular/core/testing';

import { UnderWritingService } from './under-writing.service';

describe('UnderWritingService', () => {
  let service: UnderWritingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnderWritingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
