import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SpiderAppTheme } from './types';
import { LOCAL_STORAGE } from './providers';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'spider-root',
  template: `
    <spider-navbar
      [appTheme]="appTheme"
      (appThemeToggled)="onAppThemeToggled($event)">
    </spider-navbar>

    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      // height: 100vh;

      section {
        display: flex;
        flex-direction: column;
        overflow: auto;
        margin-top: 64px;
      }
    }
  `]
})
export class AppComponent {
  title = 'spider-app';
  appTheme: SpiderAppTheme;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
    private renderer: Renderer2,
    private mediaMatcher: MediaMatcher
  ) {
    this.initAppTheme();
  }

  initAppTheme() {
    const appTheme = this.localStorage.getItem('appTheme');

    const isValidThemeValue = Object
      .values(SpiderAppTheme)
      .includes(appTheme as any);

    if (isValidThemeValue) {
      this.appTheme = appTheme as SpiderAppTheme;
      this.renderer.addClass(this.document.body, this.appTheme);
    } else {
      this.appTheme = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches
        ? SpiderAppTheme.Dark
        : SpiderAppTheme.Light;
      this.renderer.addClass(this.document.body, this.appTheme);
      this.localStorage.setItem('appTheme', this.appTheme);
    }
  }

  onAppThemeToggled(appTheme: SpiderAppTheme) {
    Object.values(SpiderAppTheme).forEach((_appTheme) => {
      this.renderer.removeClass(this.document.body, this.appTheme);
    });

    this.appTheme = appTheme;
    this.renderer.addClass(this.document.body, this.appTheme);
    this.localStorage.setItem('appTheme', this.appTheme);
  }
}
