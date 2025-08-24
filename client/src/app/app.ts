import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { User } from '../models/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  protected router = inject(Router);
  private http = inject(HttpClient);
  protected readonly title = signal('client');
  protected members = signal<User[]>([]);
  
  async ngOnInit() {
    this.members.set(await this.getMembers());
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');

    if (!userString) return;
    
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers() {
    try{
      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'));
    }
    catch (error) {
      console.log('Error fetching members:', error);
      return [];
    }
  }
}
