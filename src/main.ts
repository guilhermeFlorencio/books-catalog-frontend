import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { authInterceptor } from './app/auth/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideForms(),
    provideRouter(appRoutes), provideAnimationsAsync(),
  ],
}).catch(err => console.error(err));
function provideForms(): import("@angular/core").EnvironmentProviders | import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

