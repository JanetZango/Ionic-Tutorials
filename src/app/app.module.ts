import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { routes } from './router';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AboutComponent } from './about/about.component';
import { MoreTutorialsComponent } from './more-tutorials/more-tutorials.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    TutorialComponent,
    AboutComponent,
    MoreTutorialsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
