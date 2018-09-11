import { TestBed, inject } from '@angular/core/testing';

import { ELDWEATHERService } from './eldweather.service';

describe('ELDWEATHERService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ELDWEATHERService]
    });
  });

  it('should be created', inject([ELDWEATHERService], (service: ELDWEATHERService) => {
    expect(service).toBeTruthy();
  }));
});
