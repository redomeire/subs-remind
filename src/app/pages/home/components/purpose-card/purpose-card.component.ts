import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-purpose-card',
  imports: [ButtonModule],
  templateUrl: './purpose-card.component.html',
})
export class PurposeCardComponent {
  constructor() {}
  purposeCard = input({
    title: '',
    description: '',
    button: {
      label: '',
      action: () => {},
    },
  });
}
