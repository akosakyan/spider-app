import { Component, OnInit } from "@angular/core";

import { CourseStructureService } from "../services";
@Component({
    selector: 'spider-lesson-nine',
    template: `
        <div>
            The spider-lesson-nine
        </div>
    `,
    styles: [
        ``
    ]
})

export class LessonNineComponent implements OnInit {

    lesson = this.courseStructure.getLesson(9);

    constructor(
        private courseStructure: CourseStructureService,
    ) { }

    ngOnInit(): void {
        
    }
    
}
