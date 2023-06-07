import { TestBed } from '@angular/core/testing';

import { LoginResult, LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfull', () => {
    expect(service.login("user1@maximago.de", "P@ssw0rd")).toBe(LoginResult.Success)
  });

  it('should login unsuccessful', () => {
    expect(service.login("user1@maximago.de", "123")).toBe(LoginResult.Not_Success)
  });

  it('should logout correctly', () => {
    service.login("user1@maximago.de", "P@ssw0rd");
    service.logout()
    expect(localStorage.getItem("USER")).toBeNull()
  })
});
