import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected accountService = inject(AccountService);
  protected toast = inject(ToastService);
  protected router = inject(Router);
  protected creds: any = {};

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (response) => {
        this.toast.success('Login successfully');
        this.router.navigateByUrl('/members');
        console.log('Login successful', response);
        this.creds = {}; // Clear credentials after successful login
      },
      error: (error) => {
        this.toast.error(error.error);
        console.error(error);
      }
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
