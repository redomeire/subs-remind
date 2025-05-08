import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerList = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Login',
      link: '/auth/login',
    },
    {
      name: 'Register',
      link: '/auth/register',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
    }
  ];
}
