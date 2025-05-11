import { Component } from '@angular/core';
import { SocialButtonComponent } from '../../modules/auth/components/social-button/social-button.component';

@Component({
  selector: 'app-dashboard',
  imports: [SocialButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
