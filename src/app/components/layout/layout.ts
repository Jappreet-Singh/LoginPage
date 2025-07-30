import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  router = inject(Router);
  onLogOut() {
    this.router.navigate(['/login']);
    debugger;
    // Clear the token from local storage
    localStorage.removeItem('token');
  }
}
