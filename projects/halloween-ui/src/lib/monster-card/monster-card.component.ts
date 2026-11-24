import { Component, Input } from '@angular/core';

@Component({
selector: 'lib-monster-card',
imports: [],
templateUrl: './monster-card.component.html',
styleUrl: './monster-card.component.scss',
})
export class MonsterCard {
    @Input() foto = '';
    @Input() titulo = 'Sin nombre';
    @Input() texto = '';
    @Input() boton = '';
}