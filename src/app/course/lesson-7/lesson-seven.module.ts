import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

import { LessonSevenRoutingModule } from "./lesson-seven-routing.module";
import { LessonSevenComponent } from "./lesson-seven.component";
import { CounterComponent } from "./counter/counter.component";
import { TodoAppComponent } from "./todo-app/todo-app.component";

@NgModule({
  declarations: [LessonSevenComponent, CounterComponent, TodoAppComponent],
  imports: [
    CommonModule,
    LessonSevenRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class LessonSevenModule {}
