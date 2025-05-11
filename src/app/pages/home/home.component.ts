import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { PurposeCardComponent } from './components/purpose-card/purpose-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    NgOptimizedImage,
    TrackCardComponent,
    NgFor,
    PurposeCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public router: Router) {}
  trackCards = [
    {
      layout: 'horizontal',
      label: 'Manage',
      title: 'Key Features of SubsRemind',
      description: 'Track subscriptions and receive timely reminders',
      buttonLabel: 'Learn More',
    },
    {
      layout: 'vertical',
      label: 'Save',
      title: 'Spending Summary',
      description: 'Get insights into your monthly spending habits',
      buttonLabel: 'Sign Up',
    },
    {
      layout: 'horizontal',
      label: 'Reminders',
      title: 'Never Miss Payments',
      description: 'Receive alerts before your subscription are due',
      buttonLabel: 'Add now',
    },
  ];

  purposeCards = [
    {
      title: 'Track your subscriptions and never miss a payment again!',
      description: 'Stay organized and in control of your finances',
      button: {
        label: 'Learn More',
        action: () => {
          this.router.navigate(['/dashboard']);
        },
      },
    },
    {
      title: 'Easily manage your subscription details with our intuitive dashboard',
      description: 'Get a clear overview of your monthly spending at a glance',
      button: {
        label: 'Sign Up',
        action: () => {
          this.router.navigate(['/auth/register']);
        },
      },
    },
    {
      title: 'Customize your reminder settings to fit your lifestyle',
      description: 'Choose when you want to be reminded about upcoming payments',
      button: {
        label: 'Get Started',
        action: () => {
          this.router.navigate(['/dashboard']);
        },
      },
    },
  ];
}
