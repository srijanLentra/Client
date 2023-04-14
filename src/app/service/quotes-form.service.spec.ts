import { TestBed } from '@angular/core/testing';

import { QuotesFormService } from '../quotes-form.service';

describe('QuotesFormService', () => {
  let service: QuotesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
