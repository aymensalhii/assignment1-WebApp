import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
      }
    ],
    
  },
  { 
    path: 'users', 
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) 
      }
    ]
  },
  { 
    path: 'publications',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/publications/publications.module').then(m => m.PublicationsModule) 
      }
    ]
  },
  { 
    path: 'tags',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/tags/tags.module').then(m => m.TagsModule) 
      }
    ]
  },
  { 
    path: 'analytics',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/analytics/analytics.module').then(m => m.AnalyticsModule) 
      }
    ]
  },
  { 
    path: 'profile',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) 
      }
    ]
  },
  { 
    path: 'settings',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) 
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
