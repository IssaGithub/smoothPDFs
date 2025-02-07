import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen= false;

  constructor(private router :Router){

  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isSearchVisible(): boolean {
    return this.router.url === '/';
  }

  onSerach(event: Event) {
    
  }
}
