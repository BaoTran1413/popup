import { Component, OnInit } from '@angular/core';
import {ServiceUser, User} from './user.service'
import { ServiceDepartment, Department} from '../department/department.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  ids:any
  name:any
  age:any
  position:any
  email:any
  hiredate:any
  department:any


  visibleShow = false;
  visiblecreate = false;
  visibleedit = false;
  currentuser : User = new User();
  users : User[]
  
  departments : Department[]
  constructor(serviceuser : ServiceUser, servicedepartment : ServiceDepartment) { 
    this.users = serviceuser.get_user()
    this.departments= servicedepartment.get_department()
  }

  ngOnInit(): void {
   
  }
  show(user){
    this.currentuser = user
    this.visibleShow = true;

  }ChangeInfoDepartment(){}
  create(){
    this.visiblecreate = true;
  }
  save(){
    this.users.push(
      {
        Id:this.users.length + 1,
        Name:this.name,
        Age: this.age,
        Position:this.position,
        Email:this.email,
        Hiredate:this.hiredate,
        Department:this.department,
      }
    )
    this.name=''
    this.age=''
    this.position=''
    this.email=''
    this.hiredate=''
    this.department=''
    this.visiblecreate = false;
  }
  Edit(user){
    this.visibleedit = true;
    const edit = this.users.findIndex(edits => edits.Id === user.Id)
    this.name=this.users[edit].Name
    this.age=this.users[edit].Age
    this.position=this.users[edit].Position
    this.email=this.users[edit].Email
    this.hiredate=this.users[edit].Hiredate
    this.department=this.users[edit].Department
    this.ids = user.Id
  }
  update(){
    const ud = this.users.findIndex(edits => edits.Id === this.ids)
    this.users[ud].Name =  this.name
    this.users[ud].Age = this.age
    this.users[ud].Position = this.position
    this.users[ud].Email = this.email
    this.users[ud].Hiredate = this.hiredate
    this.users[ud].Department = this.department
    this.visibleedit = false;
    this.name=''
    this.age=''
    this.position=''
    this.email=''
    this.hiredate=''
    this.department=''
  }
  delete(user){
    const dl = this.users.findIndex(edits => edits.Id === user.Id)
    this.users.splice(dl,1)

  }
}
