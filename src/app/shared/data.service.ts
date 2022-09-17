import { OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserOptions } from './user-options.model';
import { LocalStorageService } from './local-storage.service';

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
