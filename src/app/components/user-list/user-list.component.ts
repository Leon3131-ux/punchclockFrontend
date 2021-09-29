import { Component, OnInit } from '@angular/core';
import {ReturnUser} from "../../models/return-user";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {Company} from "../../models/company";
import {Permission} from "../../models/permission";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      users.forEach((user: any) => {
        this.users.push(this.toUser(user));
      })
    })
  }

  users: ReturnUser[] = [];
  showUserEditDialog: boolean = false;

  public isAllowedToDelete(user: ReturnUser): boolean{
    if(this.authService.hasPermissions(['ADMINISTRATE'])){
      if(!user.hasPermissions(['ADMINISTRATE', 'SUPER_ADMINISTRATE'])){
        return true;
      }
    }
    if(this.authService.hasPermissions(['SUPER_ADMINISTRATE'])){
      if(!user.hasPermissions(['SUPER_ADMINISTRATE'])){
        return true;
      }
    }
    return false;
  }

  public editUser(user: ReturnUser){
    this.userService.editUser(user);
    this.showUserEditDialog = true;
  }

  public deleteUser(user: ReturnUser){
    this.userService.deleteUser(user).subscribe(() => {});
  }

  private toUser(user: any){
    return new ReturnUser(
      user.id,
      user.username,
      user.permissions.map((permission: any) => this.toPermission(permission)),
      this.toCompany(user.company)

    )
  }

  private toCompany(company: any): any{
    if(company == null){
      return null;
    }
    return new Company(
      company.id,
      company.name
    )
  }

  private toPermission(permission: any){
    return new Permission(
      permission.id,
      permission.name
    )
  }

}
