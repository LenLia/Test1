export class Authoriz {
    id?: string;
    role?: Role;
    firstName?: string;
    lastName?: string;
    username?: string;
    password?: string;
    jwtToken?:string;



constructor(id: string, role: Role, lastName: string, username: string) {
    this.id = id;
    this.role = role;
    this.lastName = this.lastName;
    this.username = username;
  }
}

export enum Role {
    Admin = 'admin',
    User = 'user',
}