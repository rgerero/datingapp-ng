import { Component, Input, signal } from '@angular/core';
import { Register } from "../account/register/register";
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // @Input({ required: true }) membersFromApp: User[] = [];
  protected IsRegistered=signal(false);

  showRegister(){
    this.IsRegistered.set(true);
  }
}
