import { TestBed, inject } from '@angular/core/testing';

import { SprzetService } from './sprzet.service';

describe('SprzetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprzetService]
    });
  });

  it('should be created', inject([SprzetService], (service: SprzetService) => {
    expect(service).toBeTruthy();
  }));
});
