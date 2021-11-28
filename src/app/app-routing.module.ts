import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module')
      .then((m) => m.HomepageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module')
      .then((m) => m.CourseModule)
  },
  {
    path: 'materials',
    loadChildren: () => import('./materials/materials.module')
      .then((m) => m.MaterialsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
