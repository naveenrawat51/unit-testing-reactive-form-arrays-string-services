import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { StringArrayComponent } from './string-array/string-array.component';
import { AllPostComponent } from './all-post/all-post.component';



const routes: Routes = [
  { path: '', component: AppLoginComponent },
  { path: 'array', component: StringArrayComponent },
  { path: 'allPost', component: AllPostComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
