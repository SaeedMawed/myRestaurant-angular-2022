import { Component ,OnInit} from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLoading = true;
  showCart:boolean;

  constructor(
    private cartService:CartService
  ) {}
  title = 'myRestaurant-angular';

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    this.cartService.showCart.subscribe(data =>{
      this.showCart = data;
    })    
  }

}
