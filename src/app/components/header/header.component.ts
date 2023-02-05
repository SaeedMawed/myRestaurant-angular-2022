import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
    ) { }

  ngOnInit(): void {
  }

  header_variable= false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
      this.header_variable=true;
    }
    else {
      this.header_variable=false;
    }
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

}
