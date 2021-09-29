import {Permission} from "./permission";
import {Company} from "./company";

export class ReturnUser {

  id: number;
  username: string;
  permissions: Permission[];
  company: Company;

  constructor(
    id = 0,
    username = "",
    permissions = [],
    company = new Company()
  ) {
    this.id = id;
    this.username = username;
    this.permissions = permissions;
    this.company = company;
  }

  public hasPermissions(permissions: string[]){
    for(let permission of permissions){
      if(this.permissions.find(filerPermission => filerPermission.name == permission) != undefined){
        return true;
      }
    }
    return false;
  }

}
