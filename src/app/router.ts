import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AboutComponent } from './about/about.component';
import { MoreTutorialsComponent } from './more-tutorials/more-tutorials.component';
import { HomeComponent } from './home/home.component';






export const router: Routes =[
  {path: '',redirectTo: 'app' , pathMatch: 'full'},
  {path: 'installation',component:InstallationComponent},
  {path: 'tutorial',component: TutorialComponent },
  {path: 'about',component:AboutComponent},
  {path: 'more-tutorials',component:MoreTutorialsComponent},
  {path: 'home',component:HomeComponent}

];



export const routes: ModuleWithProviders = RouterModule.forRoot(router);
