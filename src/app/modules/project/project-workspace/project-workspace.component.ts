import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-project-workspace',
  templateUrl: './project-workspace.component.html',
  styleUrls: ['./project-workspace.component.scss']
})
export class ProjectWorkspaceComponent implements OnInit {
 
  constructor(
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) { 
    this.exchangeData.setViewState('projectWorkspace');
  }

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
