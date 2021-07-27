import { TestBed } from '@angular/core/testing';

import { ChariProjReqService } from './chari-proj-req.service';

describe('ChariProjReqService', () => {
  let service: ChariProjReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChariProjReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
