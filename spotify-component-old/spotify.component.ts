import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  private searchResults;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(trackOrArtist) {
    console.log(trackOrArtist);
    this.spotifyService.searchMusic(trackOrArtist)
      .subscribe((data) => {
        this.searchResults = data;
        console.log(data);
      });
  }


}
