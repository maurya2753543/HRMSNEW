import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { CreateUpdateClientComponent } from '../create-update-client/create-update-client.component';

@Component({
  selector: 'app-client-detail-card',
  templateUrl: './client-detail-card.component.html',
  styleUrls: ['./client-detail-card.component.scss']
})
export class ClientDetailCardComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService
  ) { }

  @Input() data: any;

  ngOnInit(): void {
    this.updateClientData();
  }

  openWebsite(url: string) {
    if(url.indexOf('https://') >= 0) {
      window.open(url);
    } else {
      window.open(`https://${url}`);
    }
  }

  updateClientData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'update' && this.data.id == panelData.id) {
          this.data = panelData;
        } 
      }
    });
  }

  updateClient() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '800px',
      component: CreateUpdateClientComponent,
      componentData: {
        action: 'update',
        formData: this.data
      }
    });
  }

}
