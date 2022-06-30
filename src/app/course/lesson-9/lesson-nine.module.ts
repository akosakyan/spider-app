import { NgModule } from "@angular/core"; 
import { CommonModule } from "@angular/common";

import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LessonNineComponent } from "./lesson-nine.component";

@NgModule({
    declarations: [
        LessonNineComponent,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule
    ]
})

export class LessonNineModule { }