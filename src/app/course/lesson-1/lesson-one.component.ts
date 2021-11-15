import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseStructureService } from '@course/shared';
import { ActivatedRoute, Event, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { filter, map, merge, startWith, Subject, takeUntil, tap } from 'rxjs';
import { B } from '@angular/cdk/keycodes';

@Component({
  selector: 'spider-lesson-one',
  template: `
    <h1>{{ lesson.title }}</h1>
    <nav mat-tab-nav-bar>
      <a mat-tab-link *ngFor="let item of lesson.concepts; let index = index"
         [routerLink]="['part-' + (index + 1)]"
         [active]="activeLink === 'part-' + (index + 1)"
      >
        {{ item }}
      </a>
    </nav>
    
    <div class="lesson-part-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .lesson-part-container {
      padding: 14px;
    }
  `]
})
export class LessonOneComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  lesson = this.courseStructure.getLesson(1);
  activeLink: string = null;

  constructor(
    private courseStructure: CourseStructureService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        filter(() => !!this.activatedRoute.firstChild),
        map((event: NavigationEnd) => this.activatedRoute.firstChild.snapshot.url[0]),
        startWith(this.activatedRoute.firstChild.snapshot.url[0]),
        takeUntil(this.destroyed$),
      )
      .subscribe(({ path }) => {
        this.activeLink = path;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
