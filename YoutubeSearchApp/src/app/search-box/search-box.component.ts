import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {YouTubeSearchService} from "../youtube-search/you-tube-search.service";
import {SearchResult} from "../youtube-search/search-result.model";
import {fromEvent} from "rxjs";
import {map, filter, debounceTime, tap, switchAll} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtubeService: YouTubeSearchService,
              private el: ElementRef) {
  }

  ngOnInit() {
    // convert the keyUp event to an Observable
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),  // extract the value of the input
      filter((text: string) => text.length > 1), // filter out
      debounceTime(250), // execute only once every 250ms
      tap(() => this.loading.emit(true)), // enable loading
      map((query: string) => this.youtubeService.search(query)), // search
      switchAll(), // discard old events if new input comes in
    ).subscribe(
      // on success
      (results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      // on error
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      // on completion
      () => {
        this.loading.emit(false);
      }
    );
  }

}
