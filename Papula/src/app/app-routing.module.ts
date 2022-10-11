import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: "",
    component:  HeroComponent
  },
  {
    path: "contactus",
    component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
