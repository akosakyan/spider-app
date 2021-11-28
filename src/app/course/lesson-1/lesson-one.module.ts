import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { LessonOneComponent } from './lesson-one.component';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { PartThreeComponent } from './part-three/part-three.component';

@NgModule({
  declarations: [
    LessonOneComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LessonOneComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'part-1' },
          { path: 'part-1', component: PartOneComponent },
          { path: 'part-2', component: PartTwoComponent },
          { path: 'part-3', component: PartThreeComponent },
        ]
      }
    ]),
    MatTabsModule
  ]
})
export class LessonOneModule { }
