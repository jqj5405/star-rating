import { Component, OnInit } from '@angular/core';
import { UserRating } from '../user-rating';

@Component({
  selector: 'app-ratinglist',
  templateUrl: './ratinglist.component.html',
  styleUrls: ['./ratinglist.component.css'],
})
export class RatingListComponent implements OnInit {
  private ratings: UserRating[] = [
    {
      name: 'John Doe',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis justo turpis. Nam tristique, nulla eu tempor sollicitudin, ipsum dui vulputate turpis, sit amet vehicula.',
      rate: 5,
    },
    {
      name: 'Dawn Amber',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci libero, semper at ante eu, luctus tempor dolor. Vestibulum risus lectus, tempus fringilla ante non.',
      rate: 4,
    },
    {
      name: 'Edwin Parham',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sagittis orci. Nam fringilla nulla urna, aliquet efficitur leo malesuada ac. Aliquam eu erat.',
      rate: 3,
    },
    {
      name: 'Gina Marshall',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quia impedit voluptates expedita cum nulla consectetur quod rem deleniti harum, nostrum numquam obcaecati dolorem voluptate?',
      rate: 2,
    },
    {
      name: 'Caesar Richards',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, expedita fugit natus fuga quam harum autem! Voluptas voluptates ut unde laudantium consectetur, voluptate soluta. Adipisci.',
      rate: 1,
    },
  ];

  getRatings() {
    return this.ratings;
  }

  constructor() {}

  ngOnInit() {}
}
