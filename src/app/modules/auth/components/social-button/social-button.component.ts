import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-social-button',
  imports: [CommonModule],
  providers: [
    {
      provide: Document,
    },
  ],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css',
})
export class SocialButtonComponent {
  constructor(
    @Inject(Document) public document: Document,
    public auth: AuthService
  ) {}
  clickAction() {
    this.auth.user$.subscribe((isAuthenticated) => {
      console.log(isAuthenticated);
    });
  }
}
