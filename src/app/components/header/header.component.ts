import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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

}
