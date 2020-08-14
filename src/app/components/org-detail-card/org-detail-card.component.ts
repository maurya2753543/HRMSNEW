import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { CreateUpdateOrgComponent } from '../create-update-org/create-update-org.component';

@Component({
  selector: 'app-org-detail-card',
  templateUrl: './org-detail-card.component.html',
  styleUrls: ['./org-detail-card.component.scss']
})
export class OrgDetailCardComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService
  ) { }

  @Input() data: any;

  ngOnInit(): void {
    this.updateOrgData();
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
        if(panelData.action == 'update' && this.data.id == panelData.id) {
          this.data = panelData;
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
        formData: this.data
      }
    });
  }

}
