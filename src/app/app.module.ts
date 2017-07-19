import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'home' localhost:3000/home, component: HomeComponent },
  { path: 'features' localhost:3000/features, component: FeatureComponent },
];


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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
