import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  @Input() expanded = true;

  ngOnInit(): void {
  }

}
