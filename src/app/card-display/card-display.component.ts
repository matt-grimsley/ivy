import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';

@Component({
    selector: 'app-card-display',
    templateUrl: './card-display.component.html',
    styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

    private _cards: Card[] = [];
    get cards(): Card[] {
        return this._cards;
    }
    set cards(value: Card[]) {
        this._cards = value;
    }

    columnsToDisplay: string[] = ['name', 'oracleText']

    constructor() {}

    ngOnInit(): void {
        this.cards.push(
            new Card(
                'Ivy, Gleeful Spellthief',
                'assets/card-back.jpg',
                'Flying\nWhenever a player casts a spell that targets only a single creature other than Ivy, Gleeful Spellthief, you may copy that spell. The copy targets Ivy. (A copy of an Aura spell becomes a token.)'
            )
        );

        debugger
    }
}
