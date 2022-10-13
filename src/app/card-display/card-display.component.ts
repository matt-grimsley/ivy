import { Component, OnDestroy, OnInit } from '@angular/core';
import { distinct, Subscription } from 'rxjs';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';

@Component({
    selector: 'app-card-display',
    templateUrl: './card-display.component.html',
    styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit, OnDestroy {
    private _stack: Card[] = [];
    get stack(): Card[] {
        return this._stack;
    }
    set stack(value: Card[]) {
        this._stack = value;
    }

    private stackSub!: Subscription;

    columnsToDisplay: string[] = ['name', 'oracleText'];

    constructor(private cardService: CardService) {}

    ngOnInit(): void {
        this.stack.push(
            new Card(
                'Ivy, Gleeful Spellthief',
                'assets/card-back.jpg',
                'Flying\nWhenever a player casts a spell that targets only a single creature other than Ivy, Gleeful Spellthief, you may copy that spell. The copy targets Ivy. (A copy of an Aura spell becomes a token.)'
            )
        );
        this.stackSub = this.cardService.stackSub.subscribe((cards) => {
            this.stack = [];
            this.stack.push(...cards);
        });
    }

    ngOnDestroy(): void {
        this.stackSub?.unsubscribe();
    }
}
