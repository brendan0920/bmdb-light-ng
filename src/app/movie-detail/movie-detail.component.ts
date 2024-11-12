import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  title: string = "Good Will Hunting";
  year: number = 1997;
  rating: string = "R";
}
