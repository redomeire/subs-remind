import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Menubar, RouterLink, NgIf, AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  headerList: MenuItem[] | undefined;
  html: HTMLHtmlElement | null = null;
  darkMode = signal(false);
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if dark mode is enabled
    this.darkMode.set(localStorage.getItem('darkMode') === 'true');
    this.html = document.querySelector('html');
    if (this.darkMode() && this.html) {
      this.html.classList.add('my-app-dark');
    }
    this.headerList = [
      {
        label: 'Dashboard',
        // icon: 'pi pi-palette',
        command: () => {
          this.router.navigate(['/dashboard']);
        }
      },
      {
        label: 'Subscriptions',
        // icon: 'pi pi-dollar',
        items: [
          {
            label: 'Manage Subscriptions',
            icon: 'pi pi-eye',
            url: 'https://angular.io/',
          },
          {
            label: 'Add Subscription',
            icon: 'pi pi-plus',
            url: 'https://vitejs.dev/',
          },
        ],
      },
      {
        label: 'Settings',
        command: () => {
          this.router.navigate(['/settings']);
        },
      },
      {
        label: 'Toggle dark mode',
        icon: `pi ${this.darkMode() ? 'pi-sun' : 'pi-moon'}`,
        command: () => {
          if (this.html) {
            this.html.classList.toggle('my-app-dark');
            this.darkMode.set(this.html.classList.contains('my-app-dark'));
            localStorage.setItem('darkMode', this.darkMode().toString());
          }
        },
      },
    ];
  }
}
