// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceUser {
  get_user(): User[]{
    return Users
  }
  
}
export class User {
  Id:number
  Name:string
  Age:string
  Position:string
  Email:string
  Hiredate: string
  Department:string
}
const Users : User[] = [
  
  {
    Id:0,
    Name:'Tran Quoc Bao',
    Age:'19',
    Position:'interns',
    Email:'QuocBaointern',
    Hiredate:'2022/04/24',
    Department:'Develop Room'
  },{
    Id:1,
    Name:'Tran Quoc Bao',
    Age:'19',
    Position:'interns',
    Email:'QuocBaointern',
    Hiredate:'2022/04/24',
    Department:'Develop Room'
  },
  {
    Id:2,
    Name:'Nguyen Tan Dat',
    Age:'20',
    Position:'employee',
    Email:'DatEmoloyee',
    Hiredate:'2022/10/05',
    Department:'QC Room'
  },{
    Id:3,
    Name:'Dinh Xuan Huy',
    Age:'22',
    Position:'interns',
    Email:'Huyintern',
    Hiredate:'2022/09/20',
    Department:'QC Room'
  },
  {
    Id:4,
    Name:'Nguyen Minh Nhan',
    Age:'21',
    Position:'employee',
    Email:'MinhNhanemployee',
    Hiredate:'2022/11/15',
    Department:'Develop Room'
  },
  {
    Id:5,
    Name:'Dao Gia Binh',
    Age:'26',
    Position:'employee',
    Email:' BinhNhanemployee',
    Hiredate:'2022/10/25',
    Department:'Accounting Room'
  },
  {
    Id:7,
    Name:'Jack Wilder',
    Age:'25',
    Position:'employee',
    Email:'JackWilder123',
    Hiredate:'2022/07/15',
    Department:'Audit Room'
  },
  {
    Id:8,
    Name:'Trinh Thi Ha',
    Age:'19',
    Position:'interns',
    Email:'HaTrinh123',
    Hiredate:'2022/08/08',
    Department:'Administration Room'
  },
  
];


