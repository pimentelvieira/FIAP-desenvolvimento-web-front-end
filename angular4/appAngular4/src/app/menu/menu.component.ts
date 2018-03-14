import { Component } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})

export class MenuComponent {
    titulo_empresa: string = "FIAP - 30SCJ";
    titulo_principal: string = "Gestão de Eventos"
}