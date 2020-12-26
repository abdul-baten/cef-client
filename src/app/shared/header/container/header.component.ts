import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}