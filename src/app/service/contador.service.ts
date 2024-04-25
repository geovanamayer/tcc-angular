import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  public array!: string[];

  constructor() {
    this.array = [];
  }

  public addUser(user: string) {
    return this.array.push(user);
  }

  public removeUser(user: string) {
    //Remover array
  }

  public getUsers() {
    return this.array;
  }
}
