import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Card } from './card.model';
import { LocalStorageService } from './local-storage.service';

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
        // this.cardPoolSub.next(this.cardPool);
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

    constructor(private http: HttpClient, private storageService: LocalStorageService) {
        // this.getCardsFromJson().subscribe(cards => {
        //     this.cardPool.push(...cards);
        //     this.cardPoolSub.next(this.cardPool);
        // });
        this.cardPool = this.storageService.get('cardPool') as Card[];
        this.cardPoolSub.next(this.cardPool);
        
        // this.cardPoolSub.subscribe(cardPool => {
        //     this.storageService.set('cardPool', cardPool);
        // });
    }

    ngOnInit(): void {}

    getCardsFromJson(): Observable<Card[]> {
        return this.http
            .get<Card[]>('assets/cards.json')
            .pipe(tap((data: Card[]) => console.log(data)));
    }

    addCardToCardPool(card: Card): void {
        if (!this.cardPool.find(el => el.name === card.name)) {
            debugger;
            console.log('Adding card to Card Pool:' + JSON.stringify(card));
            this.cardPool.push(card);
            this.cardPoolSub.next(this.cardPool);
            this.storageService.set('cardPool', this.cardPool);
        }
    }
}
