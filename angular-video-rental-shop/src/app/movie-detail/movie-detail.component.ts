import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.movieService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.movie) {
      this.movieService.updateMovie(this.movie).subscribe(() => this.goBack());
    }
  }
}
