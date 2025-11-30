import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { Home } from './components/pages/home/home';
import { Settings } from './components/pages/settings/settings';
import { NgModule } from '@angular/core';
import { Workspace } from './components/workspace/workspace';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'settings', component: Settings },
  { path: 'workspace', component: Workspace },
  { path: '**', redirectTo: 'home' }
];
