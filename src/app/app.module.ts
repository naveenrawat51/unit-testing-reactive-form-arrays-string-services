import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StringArrayComponent } from './string-array/string-array.component';
import { AllPostComponent } from './all-post/all-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    StringArrayComponent,
    AllPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
