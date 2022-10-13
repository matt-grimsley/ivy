import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from '../shared/card.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { CardService } from '../shared/card.service';

@Component({
    selector: 'app-card-stack',
    templateUrl: './card-stack.component.html',
    styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit {
    private _cardPool: Card[] = [];
    get cardPool(): Card[] {
        return this._cardPool;
    }
    set cardPool(value: Card[]) {
        this._cardPool = value;
    }

    private _stack: Card[] = [];
    get stack(): Card[] {
        return this._stack;
    }
    set stack(value: Card[]) {
        this._stack = value;
    }

    private cardSub!: Subscription;

    stackSub = new BehaviorSubject<Card[]>(this.stack);

    constructor(private http: HttpClient, private cardService: CardService) {}

    ngOnInit(): void {
        this.cardSub = this.cardService.cardPoolSub.subscribe((cards) => {
            this.cardPool = [];
            this.cardPool.push(...cards);
        });
    }

    drop(event: CdkDragDrop<Card[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.cardService.cardPool = this.cardPool;
            this.cardService.stack = this.stack;
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
            this.cardService.cardPool = this.cardPool;
            this.cardService.stack = this.stack;
        }
    }
}
