import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { App } from './app';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { routes } from './app.routes';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProductList } from './product-list/product-list';
import { MaterialModule } from './shared/material-modules/materials.module';
@NgModule({
  declarations: [
    App,
    NavBar,
    Footer,
    Dashboard,
    ProductList,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
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
