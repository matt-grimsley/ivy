import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from '../shared/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Component({
    selector: 'app-card-stack',
    templateUrl: './card-stack.component.html',
    styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit {
    private cardUrl = 'assets/cards.json';

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

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getProducts().subscribe((cards) => {
            const c: Card[] = cards;
            this.cardPool.push(...c);
            this.stack.push(...c);
        });
    }

    getProducts(): Observable<Card[]> {
        return this.http
            .get<Card[]>(this.cardUrl)
            .pipe(tap((data) => console.log(data)));
    }
    drop(event: CdkDragDrop<Card[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
