import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsLogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', component: StudentsLogComponent },
  { path: 'log', component: StudentsLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
