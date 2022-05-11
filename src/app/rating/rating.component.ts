import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() ratings: number;
  private starRating: string = '';

  getStars() {
    return this.starRating;
  }

  constructor() {}

  ngOnInit() {
    this.toStars();
  }

  toStars() {
    console.log(this.ratings);
    for (let i = 0; i < this.ratings; i++) {
      this.starRating = this.starRating.concat('&#9733;');
    }

    for (let i = 0; i < 5 - this.ratings; i++) {
      this.starRating = this.starRating.concat('&#9734;');
    }
  }
}
