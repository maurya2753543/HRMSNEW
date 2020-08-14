import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { CreateUpdateOrgComponent } from '../create-update-org/create-update-org.component';
import { CreateUpdateEmployeeComponent } from '../create-update-employee/create-update-employee.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-detail-card',
  templateUrl: './emp-detail-card.component.html',
  styleUrls: ['./emp-detail-card.component.scss']
})
export class EmpDetailCardComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService,
    private router:Router
  ) { }

  @Input() data: any;

  ngOnInit(): void {
    this.updateEmpData();
  }

  openWebsite(url: string) {
    if(url.indexOf('https://') >= 0) {
      window.open(url);
    } else {
      window.open(`https://${url}`);
    }
  }

  updateEmpData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'update' && this.data.id == panelData.id) {
          this.data = panelData;
        } 
      }
    });
  }

  updateEmp() {
    this.exchangeData.setSidePanel({
      
      isOpen: true,
      width: '800px',
      component: CreateUpdateEmployeeComponent,
      componentData: {
        action: 'update',
        formData: this.data
      }
    });
  }
  
}
