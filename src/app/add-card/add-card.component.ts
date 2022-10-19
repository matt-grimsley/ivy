import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';
import { DataService } from '../shared/data.service';
@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
    newCardInput = new FormControl('');

    autocompleteCards: string[] = [];

    constructor(private dataService: DataService, private cardService: CardService) {}

    ngOnInit(): void {}

    onEnter(): void {
        let searchValue = this.newCardInput.value;
        if (searchValue)
            this.dataService.autocomplete(searchValue).subscribe(res => {
                console.log(JSON.stringify(res));
                let cards: string[];
                if (res.data.length > 10) {
                    cards = res.data.slice(10 - res.data.length);
                } else {
                    cards = res.data;
                }
                console.log(JSON.stringify(cards));
                this.autocompleteCards = [];

                this.autocompleteCards.push(...cards);
            });
    }

    onClick(searchValue: string): void {
        this.dataService.exactSearch(searchValue).subscribe(res => {
            console.log(JSON.stringify(res));
            let card: Card = new Card(
                res.name,
                res.image_uris.normal,
                res.oracle_text,
                res.oracle_id
            );

            this.cardService.addCardToCardPool(card);
        });
    }
}
