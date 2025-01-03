import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generic/:cat-name', component: GenericComponent } //Dare un nomesensato
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
