import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { DataService } from 'src/app/services/data.service';
import { CreateUpdateOrgComponent } from 'src/app/components/create-update-org/create-update-org.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) { 
    this.exchangeData.setViewState('organization');
  }

  apiUrl = 'orgs';
  orgData: any;

  ngOnInit(): void {
    this.getData();
    this.updateOrgData();
  }

  ngOnDestroy(){
    this.loader.show();
    this.exchangeData.setSidePanel({});
  }

  updateOrgData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'create') {
          this.orgData.push(data.componentData);
        } 
      }
    });
  }

  getData() {
    this.dataService.getData(this.apiUrl).subscribe((res) => {
      this.loader.hide();
      this.orgData = res;
    });
  }

  createOrg() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '800px',
      component: CreateUpdateOrgComponent,
      componentData: {
        action: 'create'
      }
    });
  }

}
