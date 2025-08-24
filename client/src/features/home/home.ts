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
  protected IsRegistered=signal(false);

  showRegister(value: boolean) {
    this.IsRegistered.set(value);
  }
}
