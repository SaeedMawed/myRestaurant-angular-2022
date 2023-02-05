import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ) {}
  title = 'myRestaurant-angular';

  ngOnInit(): void {}

  isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
}
