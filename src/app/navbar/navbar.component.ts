import { Component, EventEmitter, Inject, Input, NgModule, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SpiderAppTheme } from '../types';

@Component({
  selector: 'spider-navbar',
  template: `
    <mat-toolbar class="mat-elevation-z6">
      <div class="mat-toolbar-content">
        <button mat-icon-button [routerLink]="['/']" style="margin-top: -5px">
          <img class="spider-logo" src="../../assets/spider-logo.jpg" alt="logo">
        </button>
        <button mat-flat-button [routerLink]="['/course']">Spider Course</button>
        <button mat-flat-button [routerLink]="['/materials']">Materials</button>
        
        <div class="flex-spacer"></div>
        
        <button mat-mini-fab (click)="onToggleAppTheme()" color="warn" class="theme-toggle-btn">
          <mat-icon>
            {{ appTheme === 'spider-light-theme' ? 'light_mode' : 'dark_mode' }}
          </mat-icon>
        </button>
        <button mat-flat-button [routerLink]="['/github']">GitHub</button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    :host::ng-deep {
      button.theme-toggle-btn {
        .mat-button-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    
    .flex-spacer {
      flex-grow: 1;
    }

    .mat-toolbar-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
    }

    .spider-logo {
      vertical-align: middle;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 2px solid lightgrey;
      object-fit: cover;
    }
  `],
})
export class NavbarComponent implements OnInit {
  @Input() appTheme: SpiderAppTheme;
  @Output() appThemeToggled = new EventEmitter<SpiderAppTheme>();

  constructor() { }

  ngOnInit(): void {}

  onToggleAppTheme() {
    this.appThemeToggled.emit(
      (this.appTheme === SpiderAppTheme.Light)
        ? SpiderAppTheme.Dark
        : SpiderAppTheme.Light
    );
  }
}

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [NavbarComponent]
})
export class NavbarComponentModule {}
