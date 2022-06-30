import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Event, NavigationEnd, Router } from "@angular/router";
import { filter, map, startWith, Subject, takeUntil } from "rxjs";

import { CourseStructureService } from "../services";

@Component({
  selector: "spider-lesson-four",
  template: `
    <h1>{{ lesson.title }}</h1>
    <nav mat-tab-nav-bar>
      <a
        mat-tab-link
        *ngFor="let item of lesson.concepts; let index = index"
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
  styles: [
    `
      .lesson-part-container {
        padding: 14px;
      }
    `,
  ],
})
export class LessonFourComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  lesson = this.courseStructure.getLesson(4);
  activeLink: string = null;

  constructor(
    private courseStructure: CourseStructureService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        filter(() => !!this.activatedRoute.firstChild),
        map(
          (event: NavigationEnd) =>
            this.activatedRoute.firstChild.snapshot.url[0]
        ),
        startWith(this.activatedRoute.firstChild.snapshot.url[0]),
        takeUntil(this.destroyed$)
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

