import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService
  ) { }

  sideMenuState = true;

  ngOnInit(): void {
  }

  toggleSideMenu(){
    this.sideMenuState = !this.sideMenuState;
    this.exchangeData.expandMainMenu(this.sideMenuState);
  }

}
