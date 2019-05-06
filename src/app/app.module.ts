import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { DetailsComponent } from './details/details.component';
import {FormsModule} from '@angular/forms';
import { IconComponent } from './icon/icon.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityWeatherComponent,
    DetailsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
