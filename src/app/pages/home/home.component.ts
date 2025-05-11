import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TrackCardComponent } from './components/track-card/track-card.component';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, NgOptimizedImage, TrackCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trackCards = [
    {
      layout: 'horizontal',
      label: 'Manage',
      title: 'Key Features of SubsRemind',
      description: 'Track subscriptions and receive timely reminders',
      buttonLabel: 'Learn More'
    },
    {
      layout: 'vertical',
      label: 'Save',
      title: 'Spending Summary',
      description: 'Get insights into your monthly spending habits',
      buttonLabel: 'Sign Up'
    },
    {
      layout: 'horizontal',
      label: 'Reminders',
      title: 'Never Miss Payments',
      description: 'Receive alerts before your subscription are due',
      buttonLabel: 'Add now'
    }
  ]
}
