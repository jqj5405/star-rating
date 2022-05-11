import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RatingComponent } from './rating/rating.component';
import { AverageRatingComponent } from './averagerating/averagerating.component';
import { RatingListComponent } from './ratinglist/ratinglist.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RatingComponent,
    AverageRatingComponent,
    RatingListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
