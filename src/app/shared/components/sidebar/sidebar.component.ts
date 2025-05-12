import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  imports: [
    DrawerModule,
    ButtonModule,
    AvatarModule,
    TooltipModule,
    AccordionModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(public authService: AuthService) {}
  @ViewChild('drawerRef') drawerRef!: Drawer;
  items: MenuItem[] | undefined;

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

  visible: boolean = true;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
      },
    ];
  }
}
