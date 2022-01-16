import { TestBed } from '@angular/core/testing';

import { TeamItemsService } from './team-items.service';

describe('TeamItemsService', () => {
  let service: TeamItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
