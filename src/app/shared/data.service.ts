import { OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserOptions } from './user-options.model';
import { LocalStorageService } from './local-storage.service';
import { CardResponse } from './card-response';
import { IAutocompleteResponse } from './autocomplete-response';
import { Card } from './card.model';

@Injectable({
    providedIn: 'root'
})
export class DataService implements OnInit, OnDestroy {
    private _userOptions: UserOptions;
    userOptionsSubject = new BehaviorSubject<UserOptions>(new UserOptions());

    constructor(private http: HttpClient, private storage: LocalStorageService) {
        this._userOptions = new UserOptions();
    }

    ngOnInit(): void {
        this.loadOptions();
    }

    public get useShowcaseVersion() {
        return this._userOptions.useShowcaseVersion;
    }

    public set useShowcaseVersion(value: boolean) {
        this._userOptions.useShowcaseVersion = value;
        console.log('set new value of useShowcaseVersion: ' + value);
        console.log('firing this event bitch');
        this.userOptionsSubject.next(this._userOptions);
    }

    cardSearch(searchValue: string): Observable<CardResponse> {
        //  let req = 'https://api.scryfall.com/cards/named?exact=' + searchValue
        //  console.log(req)
        //  this.http.get<Card>(req).subscribe(res => {

        //   let c: Card = res;
        //   console.log(c);
        //   return c as Card;
        //  })
        return this.http.get<CardResponse>(
            encodeURI('https://api.scryfall.com/cards/search?order=name&q=' + searchValue)
        );
    }

    autocomplete(searchValue: string): Observable<IAutocompleteResponse> {
        return this.http.get<IAutocompleteResponse>(
            encodeURI('https://api.scryfall.com/cards/autocomplete?q=' + searchValue)
        );
    }

    exactSearch(searchValue: string): Observable<CardResponse> {
        // let req = 'https://api.scryfall.com/cards/named?exact=' + searchValue;
        // console.log(req);
        // this.http.get<Card>(req).subscribe((res) => {
        //     let c: Card = res;
        //     console.log(c);
        //     return c;
        // });
        return this.http.get<CardResponse>(
            encodeURI('https://api.scryfall.com/cards/named?exact=' + searchValue)
        );
    }

    private loadOptions(): void {
        let opts = this.storage.get('userOptions');
        if (!opts) {
            opts = new UserOptions();
        }
        this._userOptions = opts;
        this.userOptionsSubject.next(this._userOptions);
    }

    private saveOptions(): void {
        this.storage.set('userOptions', this._userOptions);
    }

    ngOnDestroy(): void {
        this.saveOptions();
    }

    // fuzzySearch(searchValue: string) {
    //   let s = encodeURI(searchValue);
    //   console.log('GET https://api.scryfall.com/cards/named?fuzzy=' + s);
    //   this.http
    //           .get('https://api.scryfall.com/cards/named?fuzzy=' + s)
    //           .subscribe((data) => {
    //               let name = data['name'];
    //               let image_uris = data['image_uris'];
    //               const obj = image_uris['normal'];
    //               const card = new Card(name, obj);
    //               this.cardService.cardSelected.emit(card);
    //           });
    // }
}
