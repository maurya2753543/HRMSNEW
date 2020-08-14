import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { CreateUpdateOrgComponent } from 'src/app/components/create-update-org/create-update-org.component';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService,
    private route: ActivatedRoute
  ) {
    this.exchangeData.setViewState('organizationDetails');
   }

  apiUrl = 'orgs';
  orgData: any;
  private orgId = this.route.snapshot.paramMap.get('orgId');
  orgInfoData: any;

  ngOnInit(): void {
    this.getData();
    this.updateOrgData();
  }

  ngOnDestroy(){
    this.loader.show();
    this.exchangeData.setSidePanel({});
  }

  getData() {
    let url = `${this.apiUrl}/${this.orgId}`;
    this.dataService.getData(url).subscribe((res) => {
      this.loader.hide();
      this.orgData = res;
      this.orgInfoData = this.populateInfoObj();
    });
  }

  populateInfoObj() {
    let infoData = [
      { icon: 'account_balance', label: 'Organization', info: this.orgData.name, theme: 'primary', action: '' },
      { icon: 'domain', label: 'Industry', info: this.orgData.industry, theme: 'accent', action: '' },
      { icon: 'public', label: 'Website', info: this.orgData.website, theme: 'warn', action: this.openWebsite },
      { icon: 'people_alt', label: 'Total Employee', info: this.orgData.noOfEmployee, theme: 'accent', action: '' },
      { icon: 'flag', label: 'Country', info: this.orgData.country, theme: 'primary', action: '' }
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

  updateOrgData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'update' && this.orgData.id == panelData.id) {
          this.orgData = panelData;
          this.orgInfoData = this.populateInfoObj();
        } 
      }
    });
  }

  updateOrg() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '800px',
      component: CreateUpdateOrgComponent,
      componentData: {
        action: 'update',
        formData: this.orgData
      }
    });
  }

}
