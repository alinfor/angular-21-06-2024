import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';
import { FormulaireExempleComponent } from './formulaire-exemple/formulaire-exemple.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireExemple2Component } from './formulaire-exemple2/formulaire-exemple2.component';
import { FormulaireExemple3Component } from './formulaire-exemple3/formulaire-exemple3.component';
import { FormulaireExemple4Component } from './formulaire-exemple4/formulaire-exemple4.component';
import { FormulaireExemple5Component } from './formulaire-exemple5/formulaire-exemple5.component';
import { AppRoutingModule } from 'app-routing.modules';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ContainerComponent,
    DisplayComponent,
    ButtonComponent,
    FormulaireExempleComponent,
    FormulaireExemple2Component,
    FormulaireExemple3Component,
    FormulaireExemple4Component,
    FormulaireExemple5Component,
    NotfoundComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
