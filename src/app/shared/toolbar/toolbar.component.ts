import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
    isExpanded: boolean;
    isShowcaseToggleChecked: boolean;
    dataSub: Subscription;

    constructor(private data: DataService) {
        this.isExpanded = false;
        this.isShowcaseToggleChecked = false;
        this.dataSub = data.userOptionsSubject.subscribe((opts) => {
            this.isShowcaseToggleChecked = opts.useShowcaseVersion;
            console.log('bitch I caught this sub, it was ' + opts.useShowcaseVersion);
        });
    }

    ngOnInit(): void {}

    settingsClicked(): void {
        this.isExpanded = !this.isExpanded;
    }

    onToggle($event: MatSlideToggleChange) {
        this.data.useShowcaseVersion = $event.checked;
        console.log('onToggle is logging ' + this.data.useShowcaseVersion);
    }

    ngOnDestroy(): void {
        this.dataSub.unsubscribe();
    }
}
