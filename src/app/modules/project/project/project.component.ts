import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { CreateUpdateProjectComponent } from 'src/app/components/create-update-project/create-update-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) { 
    this.exchangeData.setViewState('project');
  }

  apiUrl = 'project';
  projectData: any;

  ngOnInit(): void {
    this.getData();
    this.updatePojectData();
  }

  getData() {
    this.dataService.getData(this.apiUrl).subscribe((res) => {
      this.loader.hide();
      this.projectData = res;
    });
  }

  ngOnDestroy(){
    this.loader.show();
  }
  updatePojectData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'create') {
          this.projectData.push(data.componentData);
        } 
      }
    });
  }

  createProject() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '800px',
      component: CreateUpdateProjectComponent,
      componentData: {
        action: 'create'
      }
    });
  }

}
