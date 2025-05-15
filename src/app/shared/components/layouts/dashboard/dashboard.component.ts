import { Component, ContentChild, TemplateRef } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SidebarComponent, NgTemplateOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @ContentChild('pageTitle', { read: TemplateRef })
  pageTitle!: TemplateRef<unknown> | null;
  @ContentChild('pageDescription', { read: TemplateRef })
  pageDescription!: TemplateRef<unknown> | null;
  @ContentChild('pageContent', { read: TemplateRef })
  pageContent!: TemplateRef<unknown> | null;
}
