import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyUrl = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) { }

  searchMusic(trackOrArtist: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQBBDXB2WyiNu0DxzBAm-TG3VnSsbGota255aOOBTitxsUY0_B7G6yIv8Z0tIIVgMMkfo2_llGFeHoSss3CKVCsJ_f93bk85HHHBZy-ijqd0EkOh5JklH68c5vjjA77y-8iFfl8ynq4xAPfV_NilHZUT8u56MA'
    })

    return this.http.get(
      this.spotifyUrl + 'search?q=' + trackOrArtist.replace(' ', '+') + '&type=track%2Cartist&limit=3',
      { headers: headers }
    );
  }

}
