import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Card } from './card.model';

@Injectable({
    providedIn: 'root'
})
export class CardService implements OnInit {
    private _normalImage: string =
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/d/9/d94c15b7-6c8f-45a6-8734-975e3e3b790c.jpg?1663051122';
    private _showcaseImage: string =
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/4/5/45cba0d0-ca77-47c0-8f77-7beedb6c557b.jpg?1663053073';
    private _cardName: string = 'Ivy, Gleeful Spellthief';

    private _cardPool: Card[] = [];
    get cardPool(): Card[] {
        return this._cardPool;
    }
    set cardPool(value: Card[]) {
        this._cardPool = value;
        this.cardPoolSub.next(this.cardPool);
    }

    private _stack: Card[] = [];
    get stack(): Card[] {
        return this._stack;
    }
    set stack(value: Card[]) {
        this._stack = value;
        this.stackSub.next(this.stack);
    }

    public cardPoolSub = new BehaviorSubject<Card[]>(this.cardPool);
    public stackSub = new BehaviorSubject<Card[]>(this.stack);

    constructor(private http: HttpClient) {
        this.getCardsFromJson().subscribe((cards) => {
            this.cardPool.push(...cards);
            this.cardPoolSub.next(this.cardPool);
        });
    }

    ngOnInit(): void {}

    useShowcaseImage(): void {
        // this._ivy.imagePath = this._showcaseImage;
    }

    useNormalImage(): void {
        // this._ivy.imagePath = this._normalImage;
    }

    getCardsFromJson(): Observable<Card[]> {
        return this.http
            .get<Card[]>('assets/cards.json')
            .pipe(tap((data: Card[]) => console.log(data)));
    }
}
