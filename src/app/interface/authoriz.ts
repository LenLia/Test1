export class Authoriz {
    id?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    password?: string;
    jwtToken?:string;
    avatar?: string;


constructor(id: string, role: string, lastName: string, username: string) {
    this.id = id;
    this.role = role;
    this.lastName = this.lastName;
    this.username = username;
  }
}

