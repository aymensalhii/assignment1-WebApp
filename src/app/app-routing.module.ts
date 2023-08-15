import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { 
    path: 'users', 
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) 
  },
  { path: 'publications', loadChildren: () => import('./pages/publications/publications.module').then(m => m.PublicationsModule) },
  { path: 'tags', loadChildren: () => import('./pages/tags/tags.module').then(m => m.TagsModule) },
  { path: 'analytics', loadChildren: () => import('./pages/analytics/analytics.module').then(m => m.AnalyticsModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
