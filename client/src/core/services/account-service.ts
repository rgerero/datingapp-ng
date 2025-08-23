import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:5001/api';
  currentUser = signal<User | null>(null);

  login(creds: any) {
    return this.http.post<User>(`${this.baseUrl}/account/login`, creds).pipe(
      tap(user => {
        if (user) {
          this.currentUser.set(user);
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }
}
