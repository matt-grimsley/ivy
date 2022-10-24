import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';

@Component({
    selector: 'app-remove-card',
    templateUrl: './remove-card.component.html',
    styleUrls: ['./remove-card.component.scss']
})
export class RemoveCardComponent implements OnInit {
    constructor(private cardService: CardService) {}

    cardPool: Card[] = [];
    cardSub!: Subscription;

    ngOnInit(): void {
        this.cardSub = this.cardService.cardPoolSub.subscribe(cards => {
            this.cardPool = [];
            this.cardPool.push(...cards);
        });
    }

    onClick(card: Card): void {
        this.cardService.removeCardFromCardPool(card);
    }
}
