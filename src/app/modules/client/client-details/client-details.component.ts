import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { CreateUpdateClientComponent } from 'src/app/components/create-update-client/create-update-client.component';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService,
    private route: ActivatedRoute
  ) {
    this.exchangeData.setViewState('clientDetails');
   }

  apiUrl = 'client';
  clientData: any;
  private clientId = this.route.snapshot.paramMap.get('clientId');
  clientInfoData: any;

  ngOnInit(): void {
    this.getData();
    this.updateClientData();
  }

  ngOnDestroy(){
    this.loader.show();
    this.exchangeData.setSidePanel({});
  }

  getData() {
    let url = `${this.apiUrl}/${this.clientId}`;
    this.dataService.getData(url).subscribe((res) => {
      this.loader.hide();
      this.clientData = res;
      this.clientInfoData = this.populateInfoObj();
    });
  }

  populateInfoObj() {
    let infoData = [
      { icon: 'recent_actors', label: 'Client', info: this.clientData.client, theme: 'primary', action: '' },
      { icon: 'domain', label: 'Industry', info: this.clientData.industry, theme: 'accent', action: '' },
      { icon: 'public', label: 'Website', info: this.clientData.website, theme: 'warn', action: this.openWebsite },
      { icon: 'dns', label: 'Total Project', info: this.clientData.totalProject, theme: 'accent', action: '' },
      { icon: 'flag', label: 'Country', info: this.clientData.country, theme: 'primary', action: '' }
    ];

    return infoData;
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
        if(panelData.action == 'update' && this.clientData.id == panelData.id) {
          this.clientData = panelData;
          this.clientInfoData = this.populateInfoObj();
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
        formData: this.clientData
      }
    });
  }

}
