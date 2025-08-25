import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private accountService = inject(AccountService);

  init() {
    const userJson = localStorage.getItem('user');
    if (!userJson) return of(null);
    
    const user = JSON.parse(userJson);
    this.accountService.setCurrentUser(user);

    return of(null);
  }
}
