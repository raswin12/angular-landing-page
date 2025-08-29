import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
