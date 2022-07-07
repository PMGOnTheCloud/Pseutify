import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../interfaces/song';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {

  constructor(private http: HttpClient) { }

  getSongs() {
    return this.retrievedSongs;
  }

  retrieveRemote(string: any = "Levitating") {
    this.http.get(`/search/track/?q=${string}&index=0&limit=10&output=json`).subscribe({
      error: () => { console.log("Data not finded") },
      next: (data:any) => { console.log(string); this.retrievedSongs.next(data.data) }
    });
  }

  retrievedSongs = new Subject<any>();


}
