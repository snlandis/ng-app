import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    FeaturesCardComponent,
    FeatureDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
