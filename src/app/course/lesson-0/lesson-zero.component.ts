import { Component, OnInit } from '@angular/core';
import { CourseStructureService } from '@course/shared';

@Component({
  selector: 'spider-lesson-zero',
  template: `
    <h1>Course Structure</h1>
    
    <mat-list class="spider-course-parts-list">
      <div mat-subheader>{{ courseStructure.title }}</div>
      <mat-list-item *ngFor="let item of courseStructure.advancedParts">
        <div mat-line class="title">
          {{ item.title }}
        </div>
        <div mat-line class="part" *ngFor="let concept of item.concepts">
          <mat-checkbox [checked]="false"></mat-checkbox>
          <span>{{ concept }}</span>
        </div>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    .spider-course-parts-list {
      .mat-list-item {
        margin-bottom: 6px;
        
        .title {
          padding-bottom: 2px;
          margin-bottom: 8px; 
          font-size: 18px; 
          font-weight: bold;
        }
        
        .part {
          padding-left: 10px;
          display: flex;
          
          span {
            padding: 0 0 8px 10px
          }
        }
      }
    }
  `]
})
export class LessonZeroComponent implements OnInit {

  constructor(public courseStructure: CourseStructureService) {
  }

  ngOnInit(): void {
  }
}
