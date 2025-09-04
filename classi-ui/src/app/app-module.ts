import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { App } from './app';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { routes } from './app.routes';
import { LandingPage } from './landing-page/landing-page';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    App,
    NavBar,
    Footer,
    Dashboard,
    LandingPage
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
