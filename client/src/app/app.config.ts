import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { InitService } from '../core/services/init-service';
import { lastValueFrom } from 'rxjs';
import { errorInterceptor } from '../core/interceptors/error-interceptor';
import { jwtInterceptor } from '../core/interceptors/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor,jwtInterceptor])),
    provideAppInitializer(async () => {
      const initService = inject(InitService);
      try {
        return lastValueFrom(initService.init());
      } finally {
        /// Enable below if the Init is taking more than 1 min.
        // const splash = document.getElementById('splash');
        // if (splash) {
        //   splash.remove();
        // } 
      }
    })
  ]
};
