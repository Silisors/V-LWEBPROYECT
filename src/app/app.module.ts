import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LastHomePageComponent } from './last-home-page/last-home-page.component';
import { AboutUs2Component } from './about-us2/about-us2.component';
import { ContactMEComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsMainComponent } from './about-us-main/about-us-main.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { ReviewsMainComponent } from './reviews-main/reviews-main.component';
import { ComentariosMainComponent } from './comentarios-main/comentarios-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServicesHomeComponent,
    AboutUsComponent,
    LastHomePageComponent,
    AboutUs2Component,
    ContactMEComponent,
    FooterComponent,
    AboutUsMainComponent,
    MainPageComponent,
    ServicesMainComponent,
    ProjectsMainComponent,
    ReviewsMainComponent,
    ComentariosMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
