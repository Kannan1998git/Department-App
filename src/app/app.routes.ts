import { Routes } from '@angular/router';

export const routes: Routes = [   
    { path: '', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }];
