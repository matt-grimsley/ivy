import { Injectable } from '@angular/core';
import { CardResponse } from './card-response';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private _normalImage: string =
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/d/9/d94c15b7-6c8f-45a6-8734-975e3e3b790c.jpg?1663051122';
    private _showcaseImage: string =
        'https://c1.scryfall.com/file/scryfall-cards/normal/front/4/5/45cba0d0-ca77-47c0-8f77-7beedb6c557b.jpg?1663053073';
    private _cardName: string = 'Ivy, Gleeful Spellthief';

    // private _ivy: Card;

    constructor() {
        //this._ivy = new Card(this._cardName, this._showcaseImage);
    }

    // ivy(): Card {
    //     return this._ivy;
    // }

    useShowcaseImage(): void {
        // this._ivy.imagePath = this._showcaseImage;
    }

    useNormalImage(): void {
        // this._ivy.imagePath = this._normalImage;
    }
}
