import { TestBed } from '@angular/core/testing';

import { InfoHeroService } from './info-hero.service';

describe('InfoHeroService', () => {
  let service: InfoHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
