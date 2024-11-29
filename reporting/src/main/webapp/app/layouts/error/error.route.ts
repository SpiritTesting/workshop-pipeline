import { Routes } from '@angular/router';

export const errorRoute: Routes = [
  {
    path: 'error',
    loadComponent: () => import('./error.component'),
    title: 'Fehlerseite!',
  },
  {
    path: 'accessdenied',
    loadComponent: () => import('./error.component'),
    data: {
      errorMessage: 'Sie haben nicht die nötigen Berechtigungen um diese Seite anzuzeigen.',
    },
    title: 'Fehlerseite!',
  },
  {
    path: '404',
    loadComponent: () => import('./error.component'),
    data: {
      errorMessage: 'Die Seite existiert nicht.',
    },
    title: 'Fehlerseite!',
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
