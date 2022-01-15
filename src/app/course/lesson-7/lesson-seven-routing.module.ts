import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LessonSevenComponent } from './lesson-seven.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
  {
    path: '',
    component: LessonSevenComponent,
    children: [
      { path: 'part-2', component: CounterComponent },
      { path: 'part-3', component: TodoAppComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonSevenRoutingModule { }
