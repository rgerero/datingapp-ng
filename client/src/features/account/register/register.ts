import { Component } from '@angular/core';
import { RegisterCreds } from '../../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds={} as RegisterCreds;

  registerUser() {
    console.log(this.creds);
  } 

  cancel() {
    console.log('cancelled');
  } 
}
