import { TestBed } from '@angular/core/testing';

import { ProfitProjReqService } from './profit-proj-req.service';

describe('ProfitProjReqService', () => {
  let service: ProfitProjReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitProjReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
