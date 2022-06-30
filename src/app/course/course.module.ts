import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

import { CourseRoutingModule } from "./course-routing.module";
import { CourseComponent } from "./course.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CourseComponent],
  imports: [
    MatSidenavModule,
    MatListModule,
    CourseRoutingModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CourseModule {}
