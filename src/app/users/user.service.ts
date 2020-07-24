import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
        constructor(){
           }
    getUsers(){
        return [
            {
                name: 'Emanuele',
                lastname: 'Correggia',
                email: 'pippo@gmail.com',
                fiscalcode: 'pippo78m22z444s',
                province: 'Crotone',
                phone: '333333333',
                age: 34
            },
            {
                name: 'Mario',
                lastname: 'Correggia',
                email: 'gastone@gmail.com',
                fiscalcode: 'pippo78m22z444s',
                province: 'Cosenza',
                phone: '333333333',
                age: 32
            },
            {
                name: 'Giovanni',
                lastname: 'Correggia',
                email: 'pluto@gmail.com',
                fiscalcode: 'pippo78m22z444s',
                province: 'Reggio Calabria',
                phone: '333333333',
                age: 30
            },
            {
                name: 'Marco',
                lastname: 'Correggia',
                email: 'topolino@gmail.com',
                fiscalcode: 'pippo78m22z444s',
                province: 'Roma',
                phone: '333333333',
                age: 28
            }
        ]
    }
}