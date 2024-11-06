import { NgModule } from '@angular/core';                    //imports cores
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  //Some animations

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';                                    //import components
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { DashboardComponent } from './pages-adm/components/dashboard/dashboard.component';   

import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/shared/home/home.component';  //import Angular Material

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
