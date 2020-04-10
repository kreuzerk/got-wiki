import { TestBed } from '@angular/core/testing';

import { GotWikiService } from './got-wiki.service';

describe('GotWikiService', () => {
  let service: GotWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
