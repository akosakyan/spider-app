import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonSevenRoutingModule } from './lesson-seven-routing.module';
import { LessonSevenComponent } from './lesson-seven.component';


@NgModule({
  declarations: [
    LessonSevenComponent
  ],
  imports: [
    CommonModule,
    LessonSevenRoutingModule
  ]
})
export class LessonSevenModule { }
