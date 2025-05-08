import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SocialButtonComponent } from "../social-button/social-button.component";

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, SocialButtonComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  formType = input<'login' | 'register'>('login');

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);
  }
}
