import { TestBed, inject } from '@angular/core/testing';

import { NewsExtractService } from './news-extract.service';

describe('NewsExtractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsExtractService]
    });
  });

  it('should be created', inject([NewsExtractService], (service: NewsExtractService) => {
    expect(service).toBeTruthy();
  }));
});
