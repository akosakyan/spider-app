import { Injectable } from '@angular/core';

interface ILesson {
  title: string;
  shortTitle?: string;
  concepts: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CourseStructureService {
  readonly title = 'Understanding and using complex, but nice parts of Angular Framework';

  readonly advancedParts: Array<ILesson> = [
    {
      title: 'Components',
      concepts: [
        'Container and Presentational components',
        'Presentational components in action',
        'Configuration point for Presentational components',
      ]
    },
    {
      title: 'Directives',
      concepts: [
        'Structural Directives',
      ]
    },
    {
      title: 'Pipes',
      concepts: [
        'Pipes as pure functions',
      ]
    },
    {
      title: 'Reactive Forms',
      concepts: [
        'Complex forms with use of ControlValueAccessor',
      ]
    },
    {
      title: 'Routing',
      concepts: [
        'Tracing',
        'Lazy loading',
      ]
    },
    {
      title: 'Dependency Injection',
      concepts: [
        'Providers and InjectionTokens',
      ]
    },
    {
      title: 'Reactive State Management with RXJS',
      shortTitle: 'State Management',
      concepts: [
        'Pub-Sub algorithm',
      ]
    },
    {
      title: 'Zone JS in Angular',
      concepts: [
        'Conceptual parts',
      ]
    },
    {
      title: 'Material UI Components',
      shortTitle: 'Material UI',
      concepts: [
        'Practical configuration and usage',
      ]
    },
  ];

  readonly bonusParts = [
    'Angular Libraries',
  ]

  constructor() { }

  getLesson(index: number): ILesson {
    return this.advancedParts[index - 1];
  }

  getAdvancedPartsRoutesSchema(): Array<PartRouteSchema> {
    return [

    ];
  }
}

interface PartRouteSchema {
  path: string;
  loadChildrenImportPath: string;
}
