import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}


  placeholderName="Enter Your Email";
  showRegister:boolean=false;
  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  register(registerForm:NgForm){

  }

  toggleRegister(){
    this.showRegister = !this.showRegister;
  }

  clearRegisterForm(form:NgForm){
    console.log(form.value);
    //form.resetForm();

    this.toggleRegister();
  }

  clearLoginForm(form:NgForm){
    //form.resetForm();
    //this.placeholderName="hhhhh";
    this.toggleRegister();
  }
}

