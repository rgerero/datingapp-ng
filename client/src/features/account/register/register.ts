import { Component, inject, input, output } from '@angular/core';
import { RegisterCreds, User } from '../../../models/user';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds={} as RegisterCreds;

  registerUser() {
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(this.creds);
        this.cancel();
      },
      error: error => console.log(error)
    });
  } 

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  } 
}
