import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../shared/data.service';
@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
    newCardInput = new FormControl('');

    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    onEnter(): void {
        let searchValue = this.newCardInput.value;
        if (searchValue) this.dataService.callAPI(searchValue).subscribe(data => console.log(JSON.stringify(data)));
    }
}
