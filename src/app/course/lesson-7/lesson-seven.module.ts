import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonSevenRoutingModule } from './lesson-seven-routing.module';
import { LessonSevenComponent } from './lesson-seven.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LessonSevenComponent
  ],
  imports: [
    CommonModule,
    LessonSevenRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LessonSevenModule { }
