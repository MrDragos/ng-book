import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class SpotifyService {

  static BASE_URL = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient) {

  }

  private query(URL: string,
                params?: Array<string>) {
    let queryURL: string = `${SpotifyService.BASE_URL}?${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const API_KEY = environment.spotifyApiKey;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`,
    });
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: headers
    };
    return this.http.get(queryURL, options);
  }

  private search(query: string, type: string) {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string) {
    return this.search(query, 'track');
  }

  getTrack(id: string) {
    return this.query(`/tracks/${id}`);
  }
}
