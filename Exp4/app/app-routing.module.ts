import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component'; // Adjust the path as necessary
import { FacultyComponent } from './faculty/faculty.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: 's', component: StudentComponent },
  { path: 'f', component: FacultyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
