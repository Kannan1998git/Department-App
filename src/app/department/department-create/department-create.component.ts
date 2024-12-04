import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.scss'
})
export class DepartmentCreateComponent {
  departmentList:any = [
    {id:1,dept:'IT'},
    {id:2,dept:'EEE'},
    {id:3,dept:'MECH'},
    {id:4,dept:'ECE'}
  ]
  parentDepartMentForm!: FormGroup;
  parentDepartMentList:any[]=[];
  constructor( private fb:FormBuilder){

  }
 ngOnInit(){
  this.parentDepartMentForm = this.fb.group({
    department: [''],
    hodName: ['']
  }); }

  createParentDepartment(){
    let i=0
    this.parentDepartMentList.push({id:i++,dept:this.parentDepartMentForm.controls["department"].value,hod:this.parentDepartMentForm.controls["hodName"].value});
    this.parentDepartMentForm.reset();
    console.log(this.parentDepartMentList);
    
  }
}
