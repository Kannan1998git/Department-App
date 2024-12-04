import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{path:"",component:DepartmentCreateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
