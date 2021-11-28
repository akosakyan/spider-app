import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonSevenComponent } from './lesson-seven.component';

const routes: Routes = [{
  path: '',
  component: LessonSevenComponent,
  data: { title: 'Orchestrate MaterialTable|StateManagement|Presenters' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonSevenRoutingModule { }
