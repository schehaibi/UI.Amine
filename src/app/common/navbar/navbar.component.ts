import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarToggle=false;
  navbarOpen(state:boolean){
    this.navbarToggle = state;
  }
}
