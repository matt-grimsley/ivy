import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from '../shared/card.model';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-base-card',
    templateUrl: './base-card.component.html',
    styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {
    userOptionsSub: Subscription;
    card: Card;
    useShowcaseVersion: boolean | undefined;

    constructor(private data: DataService) {
        //this.card = new Card('Ivy, Gleeful Spellthief', 'assets/card-back.jpg');
        this.card = new Card('Ivy, Gleeful Spellthief', 'assets/card-back.jpg');

        this.userOptionsSub = data.userOptionsSubject.subscribe((opts) => {
            this.useShowcaseVersion = opts.useShowcaseVersion;
            if (this.useShowcaseVersion) {
                this.card.imagePath = 'assets/showcase.png';
            } else {
                this.card.imagePath = 'assets/main-set.png';
            }
        });
    }

    ngOnInit(): void {}
}
