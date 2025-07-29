import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  http = inject(HttpClient);
  userData: any[] = [];

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers')
      .subscribe({
        next: (response:any) => {
          this.userData = response.data || [];
          debugger;

        },
        error: (error) => {
          console.error('Error fetching users:', error);
        },
      });
  }
}
