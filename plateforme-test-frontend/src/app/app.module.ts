import * as platformBrowser from '@angular/platform-browser';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  AppComponent
} from './app.component';
import {
  HomeComponent
} from './home/home.component';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  MenuComponent
} from './menu/menu.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  LOCALE_ID
} from '@angular/core';
import {
  registerLocaleData
} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {
  HeaderComponent
} from './header/header.component';
import {
  FooterComponent
} from './footer/footer.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    platformBrowser.BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
