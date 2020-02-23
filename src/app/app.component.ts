import { Component, OnInit } from '@angular/core';

export interface Track {
  id: number
  band: string
  title: string
  genre: string
  year: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  firstIndex = 0
  lastIndex = 4
  
  tracksOriginal: Track[] = [
    {id: 1, band: 'Dead by April', title: 'Trapped', genre: 'metalcore', year: 2014},
    {id: 2, band: 'Chvrches', title: 'The Mother We Share', genre: 'indietronica', year: 2013},
    {id: 3, band: 'Three Days Grace', title: 'Burn', genre: 'alternative', year: 2008},
    {id: 4, band: 'Katy Perry', title: 'A Cup of Coffee', genre: 'pop', year: 2009},
    {id: 5, band: 'Chvrches', title: 'We Sink', genre: 'indietronica', year: 2015},
    {id: 6, band: 'Dead by April', title: 'Beautifull nightmare', genre: 'metalcore', year: 2018},
    {id: 7, band: 'Katy Perry', title: 'Birthday', genre: 'pop', year: 2006},
    {id: 8, band: 'Three Days Grace', title: 'Just Like You', genre: 'alternative', year: 2010},
    {id: 9, band: 'Three Days Grace', title: 'I Hate Everything About', genre: 'alternative', year: 2014},
    {id: 10, band: 'Chvrches', title: 'Gun', genre: 'indietronica', year: 2008},
    {id: 11, band: 'Dead by April', title: 'Angels Of Clarity', genre: 'metalcore', year: 2019},
    {id: 12, band: 'Katy Perry', title: 'Black and Gold', genre: 'pop', year: 2007},
    {id: 13, band: 'Dead by April', title: 'Losing You', genre: 'metalcore', year: 2015},
    {id: 14, band: 'Katy Perry', title: 'Dark Horse', genre: 'pop', year: 2018},
    {id: 15, band: 'Three Days Grace', title: 'Home', genre: 'alternative', year: 2008},
    {id: 16, band: 'Chvrches', title: 'Tether', genre: 'indietronica', year: 2006},
  ]

  tracks: Track[]

  bands: String[] = [
    'Dead by April', 'Chvrches', 'Three Days Grace', 'Katy Perry'
  ]
  genres: String[] = [
    'metalcore', 'indietronica', 'alternative', 'pop'
  ]
  years: Number[] = [
    2014, 2013, 2008, 2009, 2015, 2018, 2006, 2010, 2019, 2007
  ]

  band = 'all'
  genre = 'all'
  year = 0

  constructor(){
    this.tracks = this.tracksOriginal
  }
  
  ngOnInit(){
  }

  bandFilter(band){
    this.band = band
    this.mainFilter()
  }

  genreFilter(genre){
    this.genre = genre
    this.mainFilter()
  }

  yearFilter(year){
    if(year == 'all'){
      this.year = 0
    }else{
      this.year = year
    }
    this.mainFilter()
  }

  mainFilter(){
    if(this.genre == 'all' && this.band == 'all' && this.year == 0){
      this.tracks = this.tracksOriginal
    }
    if(this.genre != 'all' && this.band == 'all' && this.year == 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.genre == this.genre
      });
    }
    if(this.genre == 'all' && this.band != 'all' && this.year == 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.band == this.band
      });
    }
    if(this.genre == 'all' && this.band == 'all' && this.year != 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.year == this.year
      });
    }
    if(this.genre != 'all' && this.band != 'all' && this.year == 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.genre == this.genre
      });
      this.tracks = this.tracks.filter(t=>{
        return t.band == this.band
      });
    }
    if(this.genre != 'all' && this.band == 'all' && this.year != 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.genre == this.genre
      });
      this.tracks = this.tracks.filter(t=>{
        return t.year == this.year
      });
    }
    if(this.genre == 'all' && this.band != 'all' && this.year != 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.band == this.band
      });
      this.tracks = this.tracks.filter(t=>{
        return t.year == this.year
      });
    }
    if(this.genre != 'all' && this.band != 'all' && this.year != 0){
      this.tracks = this.tracksOriginal.filter(t=>{
        return t.band == this.band
      });
      this.tracks = this.tracks.filter(t=>{
        return t.genre == this.genre
      });
      this.tracks = this.tracks.filter(t=>{
        return t.year == this.year
      });
    }
  }

  sortByYearUp(){
    this.tracks.sort((a, b) => (a.year > b.year) ? 1 : -1)
  }

  sortByYearDown(){
    this.tracks.sort((a, b) => (a.year > b.year) ? -1 : 1)
  }

  sortByGenreUp(){
    this.tracks.sort((a, b) => (a.genre > b.genre) ? 1 : -1)
  }

  sortByGenreDown(){
    this.tracks.sort((a, b) => (a.genre > b.genre) ? -1 : 1)
  }

  sortByTitleUp(){
    this.tracks.sort((a, b) => (a.title > b.title) ? 1 : -1)
  }

  sortByTitleDown(){
    this.tracks.sort((a, b) => (a.title > b.title) ? -1 : 1)
  }

  sortByBandUp(){
    this.tracks.sort((a, b) => (a.band > b.band) ? 1 : -1)
  }

  sortByBandDown(){
    this.tracks.sort((a, b) => (a.band > b.band) ? -1 : 1)
  }

  getArrayFromTracks(length){
    if(length>=4){
      return new Array(length/4);
    }
    return new Array(1);
  }

  changePage(startPage){
    this.firstIndex = startPage * 4
    this.lastIndex = this.firstIndex + 4
  }
}
