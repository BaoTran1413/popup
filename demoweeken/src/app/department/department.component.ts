import { Component, OnInit } from '@angular/core';
import {Department, ServiceDepartment} from './department.service'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  //bien tam:
  identity:any;
  // Bien:
  name:any
  address:any
  phone:any
  website:any
  scription:any

  visibleShow = false;
  visiblecreate = false;
  visibleedit = false;
  currentdeparment : Department = new Department();
  departments : Department[]
  constructor(serviceD : ServiceDepartment) {
    this.departments = serviceD.get_department()
   }

  ngOnInit(): void {
  }

  show(department: any){
    console.log('a')
    this.currentdeparment = department;
    this.visibleShow = true;
  }
  ChangeInfoDepartment(){}
  create(){
    this.visiblecreate = true;
  }
  save(){
    this.departments.push(
      {
        Id:this.departments.length + 1,
        Name:this.name,
        Address: this.address,
        Phone:this.phone,
        Website:this.website,
        Scription:this.scription}
    )
    this.name=''
    this.address=''
    this.phone=''
    this.website=''
    this.scription=''
    this.visiblecreate = false;
  }
  edit(department){
    console.log('a')
    this.visibleedit = true;
    const edit = this.departments.findIndex(edits => edits.Id === department.Id)
    this.name= this.departments[edit].Name
    this.address = this.departments[edit].Address
    this.phone = this.departments[edit].Phone
    this.website = this.departments[edit].Website
    this.scription= this.departments[edit].Scription
    this.identity = department.Id;
  }
  update(){
    const update = this.departments.findIndex(edits => edits.Id === this.identity)
    this.departments[update].Name =  this.name
    this.departments[update].Address = this.address
    this.departments[update].Phone = this.phone
    this.departments[update].Website = this.website
    this.departments[update].Scription = this.scription
    this.visibleedit = false;
    this.name=''
    this.address=''
    this.phone=''
    this.website=''
    this.scription=''
  }
  delete(department){
    console.log('a')
    const deletes = this.departments.findIndex(edits => edits.Id === department.Id)
    this.departments.splice(deletes,1)
  }

  logEvent(data: any){
    console.log(data);
  }
}
