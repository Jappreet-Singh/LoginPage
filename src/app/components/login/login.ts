import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm :FormGroup= new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl('')
  });

  http = inject(HttpClient);
  router = inject(Router);

  OnLogin(){
    const formValue = this.loginForm.value;
    console.log("Form Value", formValue);
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",formValue).subscribe({
      next: (response:any) => {
        debugger
        if(response.result){
          // Assuming the response contains a token or some user data
          localStorage.setItem("token", response.data.token);
          
          alert("Login successful");
          console.log("Login successful", response);
        // Handle successful login, e.g., navigate to a different page or store user data
          this.router.navigateByUrl('/dashboard');
        }else{
          debugger
          alert(response.message)
        }
        
      },
      error: (error) => {
        debugger
        alert(error.statusText);
      }

    })
    
  }

}
