import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LessonFourComponent } from './lesson-four.component';
import { ReactiveFormLearn } from './reactive-form/reactive-form.component';
import { ComplexForm } from './complex-form/complex-form.component';
import { MaterialFormLearn } from './material-form-learn/material-form.component';
import { TemplateDrivenForm } from './teamplate-driven-form/templaate-driven-form.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LessonFourComponent,
    ComplexForm,
    MaterialFormLearn,
    TemplateDrivenForm,
    ReactiveFormLearn,
  ],
  imports: [
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LessonFourComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'part-1' },
          { path: 'part-1', component: ComplexForm },
          { path: 'part-2', component: MaterialFormLearn },
          { path: 'part-3', component: ReactiveFormLearn },
          { path: 'part-4', component: TemplateDrivenForm },
        ]
      }
    ]),

  ]
})
export class LessonFourModule { }
