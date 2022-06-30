import { Component, OnInit } from "@angular/core";

import { CourseStructureService } from "../services";

@Component({
    selector: 'spider-lesson-six',
    template: `
        <div>The six is ready</div>
    `,
    styles: [
        ``
    ]
})

export class LessonSixComponent implements OnInit {

    lesson = this.courseStructure.getLesson(6);
    activeLink: string = null;

    constructor(
        private courseStructure: CourseStructureService,
    ) { }

    ngOnInit(): void {
        
    }
}


