import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

// login credentials
interface Credentials {
  username: string;
  password: string;
}

// user response body
interface User {
  email: string;
  id: string;
  name: string;
}

// server login / auth response
interface UserResponse {
  status: string;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = this.cookieService.get(environment.cookieName);
  rootUrl = environment.serverUrl;
  authenticated$ = new BehaviorSubject<boolean | null>(null) as BehaviorSubject<boolean>;
  loading$ = new BehaviorSubject<boolean>(true);
  username = '';

  constructor(private cookieService: CookieService, private http: HttpClient) {}

  /**
   * handle user login http action set cookie, loading and authenticated status.s
   * @param credentials
   * @returns
   */
  login(credentials: Credentials) {
    return this.http.post<UserResponse>(`${this.rootUrl}/users/login`, credentials).pipe(
      map(response => {
        this.username = response.user.name;
        this.cookieService.set(environment.cookieName, response.token, environment.cookieExpDays);
        this.authenticated$.next(true);
        this.loading$.next(false);
        return response;
      })
    );
  }

  /**
   * check if user auth, set auth and loading status, if fails remove current cookie
   * @returns
   */
  checkAuth() {
    return this.http.get<UserResponse>(`${this.rootUrl}/users`).subscribe({
      next: response => {
        this.username = response.user.name;
        this.authenticated$.next(true);
        this.loading$.next(false);
      },
      error: ({ error }) => {
        this.authenticated$.next(false);
        this.loading$.next(false);
        if (error.status) this.cookieService.delete(environment.cookieName);
      }
    });
  }

  /**
   * logout user remove auth cookie and redirect to root page
   */
  logout() {
    this.cookieService.delete(environment.cookieName, '/');
    window.location.href = '/';
  }
}
