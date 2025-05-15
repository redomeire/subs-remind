import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { DashboardComponent as DashboardLayoutComponent } from '../../shared/components/layouts/dashboard/dashboard.component';
import { AuthService, User } from '@auth0/auth0-angular';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

interface ITimeRange {
  name: string;
  code: string;
}

interface ISubscriptionItem {
  id: string;
  name: string;
  description: string;
  amount: number;
  created_at: string;
  updated_at: string;
  status: 'paid' | 'unpaid';
  logoUrl: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardLayoutComponent,
    Card,
    Button,
    TagModule,
    Select,
    FormsModule,
    TableModule,
    ChartModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  profile: User | null | undefined = null;
  timeRanges: ITimeRange[] | undefined;
  selectedTimeRange: ITimeRange | undefined;
  subscriptionItems: ISubscriptionItem[] = [];
  tableConfig: any;
  basicData: any;
  basicOptions: any;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe((profile) => {
      this.profile = profile;
    });
    this.timeRanges = [
      {
        name: 'Last 7 days',
        code: 'last_7_days',
      },
      {
        name: 'Last 30 days',
        code: 'last_30_days',
      },
      {
        name: 'Last 90 days',
        code: 'last_90_days',
      },
      {
        name: 'Last 12 months',
        code: 'last_12_months',
      },
    ];
    this.subscriptionItems = [
      {
        id: '1',
        name: 'Subscription 1',
        description: 'Description 1',
        amount: 10_000,
        created_at: '2023-01-01',
        updated_at: '2023-01-01',
        status: 'unpaid',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Iplxbc62jGKxacuSIjQTm8JAAMhVWCJFeA&s',
      },
      {
        id: '2',
        name: 'Subscription 1',
        description: 'Description 1',
        amount: 10_000,
        created_at: '2023-01-01',
        updated_at: '2023-01-01',
        status: 'paid',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnQbLJZ3rJAv_wLXuHFJKxTO1GKMS0zhf8Q&s',
      },
    ];
    this.tableConfig = {
      basicData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: [
              'rgba(249, 115, 22, 0.2)',
              'rgba(6, 182, 212, 0.2)',
              'rgb(107, 114, 128, 0.2)',
              'rgba(139, 92, 246, 0.2)',
            ],
            borderColor: [
              'rgb(249, 115, 22)',
              'rgb(6, 182, 212)',
              'rgb(107, 114, 128)',
              'rgb(139, 92, 246)',
            ],
            borderWidth: 1,
          },
        ],
      },
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#374151',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#374151',
            },
            grid: {
              color: '#E5E7EB',
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#374151',
            },
            grid: {
              color: '#E5E7EB',
            },
          },
        },
      },
    };
  }
}
