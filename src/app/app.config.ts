import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: environment.AUTH0_CLIENT_DOMAIN ?? "",
      clientId: environment.AUTH0_CLIENT_ID ?? "",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
