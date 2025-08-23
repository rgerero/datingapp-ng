import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  private accountService = inject(AccountService);
  protected creds: any = {};
  protected loggedIn = signal(false);

  login() {
    console.log('Logging in with credentials:', this.creds);
    this.accountService.login(this.creds).subscribe({
      next: (response) => {
        this.loggedIn.set(true);
        console.log('Login successful', response);
        this.creds = {}; // Clear credentials after successful login
      },
      error: (error) => {
        alert(error.message);
        console.error('Login failed', error);
      }
    });
  }

  logout() {
    this.loggedIn.set(false);
    this.accountService.logout();
    this.creds = {}; // Clear credentials on logout
  }
}
