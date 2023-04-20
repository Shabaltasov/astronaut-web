import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent implements OnInit {
  @Input() imgSrc = '';
  @Input() cardTitle = '';
  @Input() cardInfo = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
