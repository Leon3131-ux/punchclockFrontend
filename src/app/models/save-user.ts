export class SaveUser {

  id: number;
  username: string;
  savePassword: string;
  permissionIds: number[];
  companyId: number;

  constructor(
    id = 0,
    username = "",
    savePassword = "",
    permissionIds: number[] = [],
    companyId = 0
    ) {
    this.id = id;
    this.username = username;
    this.savePassword = savePassword;
    this.permissionIds = permissionIds;
    this.companyId = companyId;
  }

}
