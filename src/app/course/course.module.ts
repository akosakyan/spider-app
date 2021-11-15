import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    CourseRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CourseModule { }
