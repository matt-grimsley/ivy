import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { AddCardComponent } from 'src/app/add-card/add-card.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
    // @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
    isExpanded: boolean;
    isShowcaseToggleChecked: boolean;
    dataSub: Subscription;

    constructor(public dialog: MatDialog, private data: DataService) {

        this.isExpanded = false;
        this.isShowcaseToggleChecked = false;
        this.dataSub = data.userOptionsSubject.subscribe((opts) => {
            this.isShowcaseToggleChecked = opts.useShowcaseVersion;
        });
    }

    ngOnInit(): void {}

    settingsClicked(): void {
        this.isExpanded = !this.isExpanded;
    }

    openDialog(): void {
       const dialogRef = this.dialog.open(AddCardComponent, {restoreFocus: false});
    //    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus())
    }

    onToggle($event: MatCheckboxChange) {
        this.data.useShowcaseVersion = $event.checked;
        console.log('onToggle is logging ' + this.data.useShowcaseVersion);
    }

    ngOnDestroy(): void {
        this.dataSub.unsubscribe();
    }
}
