import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../search/spotify.service";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  id: string;
  track: Object;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.spotifyService
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  private renderTrack(res: any): void {
    this.track = null;
    if (res) {
      this.track = res;
    }
  }

}
