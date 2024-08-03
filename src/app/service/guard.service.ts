import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  role: 'user'|'guest'|'admin'='guest'

  constructor() { }
}
