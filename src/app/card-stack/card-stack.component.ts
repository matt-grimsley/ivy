import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

    private _stack: Card[] = [];
    get stack(): Card[] {
        return this._stack;
    }
    set stack(value: Card[]) {
        this._stack = value;
    }
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getProducts().subscribe((cards) => (this.stack = cards));
    }

    getProducts(): Observable<Card[]> {
        return this.http
            .get<Card[]>(this.cardUrl)
            .pipe(tap((data) => console.log('All', JSON.stringify(data))));
    }
    drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
        moveItemInArray(this.stack, event.previousIndex, event.currentIndex);
    }
}
