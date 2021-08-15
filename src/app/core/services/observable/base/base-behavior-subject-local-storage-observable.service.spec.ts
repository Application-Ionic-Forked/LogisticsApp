import { TestBed } from '@angular/core/testing';

import { BaseBehaviorSubjectLocalStorageObservableService } from './base-behavior-subject-local-storage-observable.service';

describe('BaseBehaviorSubjectLocalStorageObservableService', () => {
  let service: BaseBehaviorSubjectLocalStorageObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseBehaviorSubjectLocalStorageObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
