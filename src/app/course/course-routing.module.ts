import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course.component';

const routes: Routes = [{
  path: '',
  component: CourseComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'lesson-0'
    },
    {
      path: 'lesson-0',
      loadChildren: () => import('./lesson-0/lesson-zero.module').then((m) => m.LessonZeroModule),
    },
    {
      path: 'lesson-1',
      loadChildren: () => import('./lesson-1/lesson-one.module').then((m) => m.LessonOneModule),
    },
    {
      path: 'lesson-2',
      loadChildren: () => import('./lesson-2/lesson-two.module').then((m) => m.LessonTwoModule),
    },
    {
      path: 'lesson-3',
      loadChildren: () => import('./lesson-3/lesson-three.module').then((m) => m.LessonThreeModule),
    },
    {
      path: 'lesson-4',
      loadChildren: () => import('./lesson-4/lesson-four.module').then((m) => m.LessonFourModule),
    },
    {
      path: 'lesson-5',
      loadChildren: () => import('./lesson-5/lesson-five.module').then((m) => m.LessonFiveModule),
    },
    {
      path: 'lesson-7',
      loadChildren: () => import('./lesson-7/lesson-seven.module').then((m) => m.LessonSevenModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
