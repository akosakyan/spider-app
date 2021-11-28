import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CourseStructureService } from './services';

@Component({
  selector: 'spider-course-container',
  template: `
    <!--<mat-toolbar color="primary" class="example-toolbar">
      <button mat-icon-button (click)="snav.toggle()"><mat-icon>menu</mat-icon></button>
      <h1 class="example-app-name">Responsive App</h1>
    </mat-toolbar>-->
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" opened [fixedTopGap]="60" [fixedInViewport]="true">
        <mat-nav-list>
          <a *ngFor="let item of navItems" 
             mat-list-item 
             routerLinkActive="active-mat-list-item" 
             [routerLink]="item.routerLink"
             class="spider-nav-list-item"
          >
            <span mat-line class="title">{{ item.text }}</span>
            <span mat-line class="desc">{{ item.desc }}</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['/course.component.scss']
})
export class CourseComponent implements OnInit {
  isMobile$ = this.breakpointObserver
    .observe(Breakpoints.Small)
    .pipe(map(({ matches }) => matches));

  navItems: Array<{ text: string; desc: string; routerLink: string; }>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private courseStructure: CourseStructureService
  ) {
    this.navItems = courseStructure.advancedParts.map((item, index) => ({
      routerLink: `lesson-${index + 1}`,
      text: item.shortTitle || item.title,
      desc: item.concepts?.[0]
    }));

    this.navItems.unshift({
      routerLink: 'lesson-0',
      text: 'Course Structure',
      desc: ''
    });
  }

  ngOnInit(): void {}
}
