import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/interface.evento';
@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(eventos: IEvento[], input: string): IEvento[] {
        //usando aerofunction (similar a delegates do c#)
        return eventos.filter(
            evento =>
                evento.descricao.toLowerCase().includes(input.toLowerCase()));
    }
}