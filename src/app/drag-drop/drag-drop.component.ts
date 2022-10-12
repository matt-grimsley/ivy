import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
@Component({
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
    stack: Card[] = [];

    ngOnInit(): void {
        this.addCardToStack(
            new Card(
                'Lightning Bolt',
                'https://cards.scryfall.io/normal/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1559596782',
                'Lightning Bolt deals 3 damage to any target.'
            )
        );
    }
    addCardToStack(card: Card) {
        this.stack.push(card);
    }

    removeCardFromStack(card: Card) {
        this.stack.splice(
            this.stack.findIndex((x) => x.name === card.name),
            1
        );
    }
}
