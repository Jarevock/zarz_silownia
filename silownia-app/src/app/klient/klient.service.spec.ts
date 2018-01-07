import { TestBed, inject } from '@angular/core/testing';

import { KlientService } from './klient.service';

describe('KlientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlientService]
    });
  });

  it('should be created', inject([KlientService], (service: KlientService) => {
    expect(service).toBeTruthy();
  }));
});
