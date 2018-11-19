import { TestBed } from '@angular/core/testing';

import { OtherproductserviceService } from './otherproductservice.service';

describe('OtherproductserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherproductserviceService = TestBed.get(OtherproductserviceService);
    expect(service).toBeTruthy();
  });
});
