import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ContainerComponent } from "src/app/container/container.component";
import { DisplayComponent } from "src/app/display/display.component";
import { FormulaireExempleComponent } from "src/app/formulaire-exemple/formulaire-exemple.component";
import { FormulaireExemple2Component } from "src/app/formulaire-exemple2/formulaire-exemple2.component";
import { FormulaireExemple3Component } from "src/app/formulaire-exemple3/formulaire-exemple3.component";
import { FormulaireExemple4Component } from "src/app/formulaire-exemple4/formulaire-exemple4.component";
import { FormulaireExemple5Component } from "src/app/formulaire-exemple5/formulaire-exemple5.component";
import { HomeComponent } from "src/app/home/home.component";
import { NotfoundComponent } from "src/app/notfound/notfound.component";
import { UsersComponent } from "src/app/users/users.component";

const routes:Routes=[

    {path:'',component:HomeComponent},
    {path:'FormulaireExempleComponent',component:FormulaireExempleComponent},
    {path:'FormulaireExemple2Component',component:FormulaireExemple2Component},
    {path:'FormulaireExemple3Component',component:FormulaireExemple3Component},
    {path:'FormulaireExemple4Component',component:FormulaireExemple4Component},
    {path:'FormulaireExemple5Component',component:FormulaireExemple5Component},
    {path:'display',component:DisplayComponent},
    {path:'users',component:UsersComponent},
    {path:'container',component:ContainerComponent},
    {path:'**',component:NotfoundComponent}
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}