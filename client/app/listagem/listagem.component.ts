import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    //fotos: Array<Object> = [];
    fotos:Object[] = [];

    constructor(http:Http) {

        http
            .get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => {

                this.fotos = fotos;

                /*
                 Poderia não ter usado o map, nesse caso
                 teríamos a necessidade de fotos.json();
                 */

                console.log(this.fotos);

            }, erro => console.log(erro));
    }


}