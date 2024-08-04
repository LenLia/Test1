import { Component } from '@angular/core';
import { InfoUsers } from 'src/app/interface/info-users';
import { AdminService } from 'src/app/service/admin.service';
import { Panel } from '../admin-page/admin-page.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor( private adminService: AdminService){
    this.adminService.getUsersAll().subscribe((users)=> {this.users=users;})
  }
  public users: InfoUsers[]= [];
  public panel: Panel = 'users';
}
