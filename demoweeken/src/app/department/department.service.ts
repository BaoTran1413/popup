// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DepartmentService {

//   constructor() { }
// }

import {Injectable} from '@angular/core';

@Injectable()

export class ServiceDepartment{
  get_department(): Department[] {
    return department
  }
}

export class Department{
  Id:number 
  Name: string
  Address: string
  Phone: string
  Website: string
  Scription: string
}
const department : Department[] = [
  {
    Id:1,
    Name:'QC Department',
    Address:'173 Nguyen Thai Son GoVap',
    Phone: '0918249840',
    Website: 'QCRoomgmailcom',
    Scription: 'this is room for QC Department'
  },
  {
    Id:2,
    Name:'Develop Department',
    Address:'173 Nguyen Thai Son GoVap',
    Phone: '09182575042',
    Website: 'DevelopRoomgmailcom',
    Scription: 'this is room for Develop Department'
  },
  {
    Id:3,
    Name:'Accounting Department',
    Address:'173 Nguyen Thai Son GoVap',
    Phone: '090501590',
    Website: 'AccountingpRoomgmailcom',
    Scription: 'this is room for Accounting Department'
  },
  {
    Id:4,
    Name:'Audit Department',
    Address:'173 Nguyen Thai Son GoVap',
    Phone: '09182575042',
    Website: 'AuditRoomgmailcom',
    Scription: 'this is room for Audit Department'
  },
  {
    Id:5,
    Name:'Administration Department',
    Address:'173 Nguyen Thai Son GoVap',
    Phone: '09182575042',
    Website: 'DevelopRoomgmailcom',
    Scription: 'this is room for Administration Department'
  }
]