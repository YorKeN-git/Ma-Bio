import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { IndexComponent } from './pages/index/index.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { CvExperiencesComponent } from './components/cv-experiences/cv-experiences.component';
import { CvFormationsComponent } from './components/cv-formations/cv-formations.component';
import { CvTechnoComponent } from './components/cv-techno/cv-techno.component';
import { CvOutilsComponent } from './components/cv-outils/cv-outils.component';
import { CvComponent } from './pages/cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CvComponent,
    CvExperiencesComponent,
    CvFormationsComponent,
    CvTechnoComponent,
    CvOutilsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    PanelModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
