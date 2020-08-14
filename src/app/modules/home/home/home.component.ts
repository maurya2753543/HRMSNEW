import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) {
    this.exchangeData.setViewState('home');
  }

  managementInfoData = [
    {
      infoCount: 10,
      infoTitle: "Clients",
      themeClass: "primary"
    },
    {
      infoCount: 25,
      infoTitle: "Projects",
      themeClass: "accent"
    },
    {
      infoCount: 800,
      infoTitle: "Employees",
      themeClass: "primary"
    },
    {
      infoCount: 28,
      infoTitle: "New Joining",
      themeClass: "accent"
    },
    {
      infoCount: 10,
      infoTitle: "Attrition",
      themeClass: "warn"
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.loader.hide();
    }, 500);
  }

  ngOnDestroy(){
    this.loader.show();
  }

  // ngAfterViewInit(): void {
  //   this.loader.hide();
  // }

}
