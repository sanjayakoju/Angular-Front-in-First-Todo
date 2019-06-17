import { TestBed } from '@angular/core/testing';

import { HttpInterceptBasicAuthService } from './http-intercept-basic-auth.service';

describe('HttpInterceptBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptBasicAuthService = TestBed.get(HttpInterceptBasicAuthService);
    expect(service).toBeTruthy();
  });
});
