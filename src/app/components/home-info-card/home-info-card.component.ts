import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-info-card',
  templateUrl: './home-info-card.component.html',
  styleUrls: ['./home-info-card.component.scss']
})
export class HomeInfoCardComponent implements OnInit {

  constructor() { }

  @Input() data: any;

  ngOnInit(): void {
  }

}
