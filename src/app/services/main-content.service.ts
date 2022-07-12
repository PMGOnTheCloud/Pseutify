import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../interfaces/song';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {

  constructor(private http: HttpClient) { }

  retrieveRemote(string: any) {
    this.http.get(`/search/track/?q=${string}&index=0&limit=10&output=json`).subscribe({
      error: () => { this.retrievedSongs.next({ "error": "Cannot communicate with the API" }) },
      next: (data:any) => { this.retrievedSongs.next(data.data) }
    });
  }

  retrievedSongs = new Subject<any>();


}
