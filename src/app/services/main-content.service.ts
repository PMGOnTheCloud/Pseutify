import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {

  constructor(private http: HttpClient) { }

  songs = [
    {
      name: 'Imagine',
      artist: 'John Lenon',
      album: 'Imagine',
      imageURL: 'https://eltrasterodepalacio.files.wordpress.com/2011/10/imagine-john-lennon-02.jpg',
    },
    {
      name: 'Don\'t look back in anger',
      artist: 'Oasis',
      album: '\(What\'s the Story\) Morning Glory?',
      imageURL: 'https://m.media-amazon.com/images/I/71OvveowPdL._SX355_.jpg',
    },
    {
      name: 'Tunak Tunak Tun',
      artist: 'Daler Mehndi',
      album: 'Tunak Tunak Tun',
      imageURL: 'https://m.media-amazon.com/images/I/510bRRXU0LL.jpg',
    },
    {
      name: 'Personality',
      artist: 'Johnny Mercer',
      album: '',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/516uzE3TdkL._SY445_SX342_QL70_ML2_.jpg',
    },
    {
      name: 'Never gonna give you up',
      artist: 'Rick Astley',
      album: 'Whenever You Need Somebody',
      imageURL: 'https://crazyminds.es/wp-content/uploads/Rick-Astley-Whenever-You-Need-Somebody.jpg',
    },
  ];

  getSongs() {
    return this.songs;
  }
}
