import { Injectable } from '@angular/core';

@Injectable()

  export class UserService {
    constructor() {
    }
   getUsers() {
       return [
           {
               name: 'Emanuele',
               lastname: 'Correggia',
               email: 'pippo@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Crotone',
               phone: '3333333333',
               age: 34
           } ,
           {
               name: 'Giovanni',
               lastname: 'Correggia',
               email: 'topolino@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Cosenza',
               phone: '3335698745',
               age: 30
           },
           {
               name: 'Marco',
               lastname: 'Correggia',
               email: 'pluto@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Reggio Calabria',
               phone: '3336521444',
               age: 28
           },
           {
               name: 'Andrea',
               lastname: 'Correggia',
               email: 'paperino@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Rende',
               phone: '3336555896',
               age: 25
           }
       ];
   }
}

