import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonTwoComponent } from './lesson-two.component';
import { StructuralDirectives } from './stuctural-directives/structural-directives.component';
import { ClassDirectives } from './class-directives/class-directives.component';

@NgModule({
  declarations: [
    LessonTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LessonTwoComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'part-1' },
        { path: 'part-1', component: StructuralDirectives },
        { path: 'part-2', component: ClassDirectives },
      ]
    }
      
    ])
  ]
})
export class LessonTwoModule { }
