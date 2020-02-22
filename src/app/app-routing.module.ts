import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CvComponent } from './pages/cv/cv.component';


const routes: Routes = [
  {path: 'index',component: IndexComponent},
  {path: '', component: IndexComponent},
  {path: 'monCV', component: CvComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
