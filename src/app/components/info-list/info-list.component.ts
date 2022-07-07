import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../../services/main-content.service';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

  songs = null;

  constructor(private mainContentService: MainContentService) { }

  ngOnInit(): void {
    this.mainContentService.retrievedSongs.subscribe({
      error: () => { console.log("Data not finded") },
      next: (data:any) => { this.songs = data; }
    });
  }

}
