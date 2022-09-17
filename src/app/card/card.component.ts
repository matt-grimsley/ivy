import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  activeCard: Card
  
  constructor(private cardService: CardService) {
    this.activeCard = cardService.ivy();
   }

  ngOnInit(): void {
  }

}
