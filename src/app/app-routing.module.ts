import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsMainComponent } from './about-us-main/about-us-main.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { ReviewsMainComponent } from './reviews-main/reviews-main.component';
import { ComentariosMainComponent } from './comentarios-main/comentarios-main.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutUsMainComponent },
  { path: 'services', component: ServicesMainComponent },
  { path: 'projects', component: ProjectsMainComponent },
  { path: 'reviews', component: ReviewsMainComponent },
  // { path: 'comentarios', component: ComentariosMainComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
