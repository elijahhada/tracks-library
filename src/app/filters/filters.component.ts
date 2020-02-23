import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() bands: String[]
  @Input() genres: String[]
  @Input() years: Number[]
  @Output() bandFilter: EventEmitter<String> = new EventEmitter<String>()
  @Output() genreFilter: EventEmitter<String> = new EventEmitter<String>()
  @Output() yearFilter: EventEmitter<String> = new EventEmitter<String>()
  constructor() { }

  ngOnInit() {
  }

  onBandChange(band) {
    this.bandFilter.emit(band)
  }

  onGenreChange(genre) {
    this.genreFilter.emit(genre)
  }

  onYearChange(year) {
    this.yearFilter.emit(year)
  }
}
