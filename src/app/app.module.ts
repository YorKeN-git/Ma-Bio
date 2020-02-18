import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { IndexComponent } from './pages/index/index.component';
import { CvComponent } from './components/cv/cv.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CvComponent,

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
