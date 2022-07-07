import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, filter } from 'rxjs';
import { MainContentService } from 'src/app/services/main-content.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private mainContentService: MainContentService) { }

  ngOnInit(): void {
    const search = document.getElementById('input');
    const keyup = fromEvent(search, 'keyup');
    keyup.pipe(
      debounceTime(1000),
      map((e:any) => e.target.value),
      filter((data) => data != "")
    ).subscribe((data) => this.mainContentService.retrieveRemote(data));
  }


}
