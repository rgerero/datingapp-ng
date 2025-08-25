import { Component, inject } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router = inject(Router);
  
}
