import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AngularComponent } from './angular/angular.component'; // Import your faculty component
import { JavascriptComponent } from './javascript/javascript.component'; // Import your student component
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  { path: 'a', component: AngularComponent },
  { path: 'j', component: JavascriptComponent },
  { path: '', redirectTo: '/a', pathMatch: 'full' } // Redirect to faculty by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }