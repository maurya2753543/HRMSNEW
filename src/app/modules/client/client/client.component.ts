import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { CreateUpdateClientComponent } from 'src/app/components/create-update-client/create-update-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) { 
    this.exchangeData.setViewState('client');
  }

  apiUrl = 'client';
  clientData: any;

  ngOnInit(): void {
    this.getData();
    this.updateClientData();
  }

  ngOnDestroy(){
    this.loader.show();
    this.exchangeData.setSidePanel({});
  }

  updateClientData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'create') {
          this.clientData.push(data.componentData);
        } 
      }
    });
  }

  getData() {
    this.dataService.getData(this.apiUrl).subscribe((res) => {
      this.loader.hide();
      this.clientData = res;
    });
  }

  createClient() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '800px',
      component: CreateUpdateClientComponent,
      componentData: {
        action: 'create'
      }
    });
  }

}
