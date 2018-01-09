import { TestBed, inject } from '@angular/core/testing';

import { SilowniaService } from './silownia.service';

describe('SilowniaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SilowniaService]
    });
  });

  it('should be created', inject([SilowniaService], (service: SilowniaService) => {
    expect(service).toBeTruthy();
  }));
});
