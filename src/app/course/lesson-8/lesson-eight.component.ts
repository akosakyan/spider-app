import { Component, OnInit } from "@angular/core";
import { CourseStructureService } from "../services";

@Component({
    selector: 'spider-eight.component.ts',
    template: `
        <div>The spider-eight</div>
    `,
    styles: [`
    `]
})

export class LessonEightComponent implements OnInit {
    lesson =  this.courseStructure.getLesson(8);
    constructor(
        private courseStructure: CourseStructureService,
      ) { }
    
      ngOnInit(): void{}
       
}