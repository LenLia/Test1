import { Component } from '@angular/core';
import { InfoUsers } from 'src/app/interface/info-users';
import { AdminService } from 'src/app/service/admin.service';
import { ApiService } from 'src/app/service/api.service';


export type Panel = 'users' | 'recipes';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  public panel: Panel = 'users';

  public changePanel(panel: Panel){
    this.panel='recipes';
  }
}
