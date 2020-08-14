import { Component, OnInit, Input } from '@angular/core';
import { CreateUpdateProjectComponent } from '../create-update-project/create-update-project.component';
import { Router } from '@angular/router';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';

@Component({
  selector: 'app-project-detail-card',
  templateUrl: './project-detail-card.component.html',
  styleUrls: ['./project-detail-card.component.scss']
})
export class ProjectDetailCardComponent implements OnInit {
  constructor(
    private exchangeData: ExchangeDataService,
    private router:Router
  ) { }

  @Input() data: any;

  ngOnInit(): void {
    this.updateProjectsData();
  }

  openWebsite(url: string) {
    if(url.indexOf('https://') >= 0) {
      window.open(url);
    } else {
      window.open(`https://${url}`);
    }
  }

  updateProjectsData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'update' && this.data.id == panelData.id) {
          this.data = panelData;
        } 
      }
    });
  }

  updateProject() {
    this.exchangeData.setSidePanel({
      
      isOpen: true,
      width: '800px',
      component: CreateUpdateProjectComponent,
      componentData: {
        action: 'update',
        formData: this.data
      }
    });
  }
}
