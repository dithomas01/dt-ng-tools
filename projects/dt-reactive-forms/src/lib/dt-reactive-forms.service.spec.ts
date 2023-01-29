import { TestBed } from '@angular/core/testing';

import { DtReactiveFormsService } from './dt-reactive-forms.service';

describe('DtReactiveFormsService', () => {
  let service: DtReactiveFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtReactiveFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
