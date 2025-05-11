import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-track-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './track-card.component.html',
  styleUrl: './track-card.component.css'
})
export class TrackCardComponent {
  trackCard = input({
    layout: '',
    label: '',
    title: '',
    description: '',
    buttonLabel: ''
  });
}
