import { Component, Input, OnInit } from '@angular/core';
import { CardResponse } from '../shared/card-response';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: Card = new Card('cardback', 'src/assets/card-back.jpg');

    constructor(private cardService: CardService) {
        // this.card = cardService.ivy();
    }

    ngOnInit(): void {}
}
