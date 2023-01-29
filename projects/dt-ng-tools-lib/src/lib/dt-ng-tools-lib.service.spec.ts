import { TestBed } from '@angular/core/testing';

import { DtNgToolsLibService } from './dt-ng-tools-lib.service';

describe('DtNgToolsLibService', () => {
  let service: DtNgToolsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtNgToolsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
