import { Component } from '@angular/core';
import { DashboardComponent as DashboardLayoutComponent } from '../../shared/components/layouts/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
