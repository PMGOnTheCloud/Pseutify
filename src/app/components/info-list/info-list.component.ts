import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../../services/main-content.service';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

  songs = this.mainContentService.songs;

  constructor(private mainContentService: MainContentService) { }

  ngOnInit(): void {
  }

}
