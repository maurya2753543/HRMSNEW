import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-info-card',
  templateUrl: './entity-info-card.component.html',
  styleUrls: ['./entity-info-card.component.scss']
})
export class EntityInfoCardComponent implements OnInit {

  constructor() { }

  @Input() data: any;

  ngOnInit(): void {
  }

}
