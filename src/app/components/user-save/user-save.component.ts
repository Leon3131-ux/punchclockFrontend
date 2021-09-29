import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SaveUser} from "../../models/save-user";
import {UserService} from "../../services/user.service";
import {ReturnUser} from "../../models/return-user";
import {CompanyService} from "../../services/company.service";
import {Company} from "../../models/company";
import {AuthService} from "../../services/auth.service";
import {PermissionService} from "../../services/permission.service";
import {Permission} from "../../models/permission";

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.css']
})
export class UserSaveComponent implements OnInit {

  constructor(
    private userService: UserService,
    private companyService: CompanyService,
    private permissionService: PermissionService,
    public authService: AuthService
  ) {
    this.userService.userEditEmitter.subscribe(user => {
      this.saveUser = this.returnUserToSaveUser(user);
      this.updateForm();
    })
  }

  saveUserForm = new FormGroup({
    id: new FormControl(),
    username: new FormControl(),
    savePassword: new FormControl(),
    permissionIds: new FormControl(),
    companyId: new FormControl()
  })

  saveUser: SaveUser = new SaveUser();
  companies: Company[] = [];
  permissions: Permission[] = [];

  ngOnInit(): void {
    if (this.authService.hasPermissions(['SUPER_ADMINISTRATE'])){
      this.companyService.getCompanies().subscribe(companies => {
        this.companies.push(new Company(0, "None"));
        this.companies = this.companies.concat(companies);
      });
    }
    this.permissionService.getPermissions().subscribe(permissions => {
      this.permissions = permissions;
      if(this.authService.hasPermissions(['ADMINISTRATE'])){
        this.permissions.splice(this.permissions.indexOf(<Permission>this.permissions.find(permission => permission.name == 'SUPER_ADMINISTRATE')), 1)
      }
    })
  }

  private returnUserToSaveUser(returnUser: ReturnUser): SaveUser{
    return new SaveUser(
      returnUser.id,
      returnUser.username,
      "",
      returnUser.permissions.map(permission => permission.id),
      returnUser.company ? returnUser.company.id : 0
    );
  }

  private updateForm(){
    this.saveUserForm.patchValue(this.saveUser);
  }

  public submitUser(){
    if(this.saveUser.id == null || this.saveUser.id == 0){
      this.createUser();
    }else{
      this.updateUser();
    }
  }

  private createUser(){
    this.userService.createUser(this.saveUserForm.getRawValue()).subscribe(() => {
      this.userService.userSaved();
    })
  }

  private updateUser(){
    this.userService.updateUser(this.saveUserForm.getRawValue()).subscribe(() => {
      this.userService.userSaved();
    })
  }

}
