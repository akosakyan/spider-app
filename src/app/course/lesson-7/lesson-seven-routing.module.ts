import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonSevenComponent } from './lesson-seven.component';

const routes: Routes = [{
  path: '',
  component: LessonSevenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonSevenRoutingModule { }
