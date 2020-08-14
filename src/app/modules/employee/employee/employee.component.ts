import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { CreateUpdateEmployeeComponent } from 'src/app/components/create-update-employee/create-update-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) { 
    this.exchangeData.setViewState('employee');
  }

  apiUrl = 'employee';
  statusFilter = 'Active';
  projectFilter = 'All';
  reportingManager = 'All';
  empData: any;
  page: number = 1;
  
  dummyPagination = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  ngOnInit(): void {
    this.getData();
    this.updateEmpData();
  }

  getData() {
    this.dataService.getData(this.apiUrl).subscribe((res) => {
      this.loader.hide();
      this.empData = res;
    });
  }

  ngOnDestroy(){
    this.loader.show();
  }
  
  createEmp() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '800px',
      component: CreateUpdateEmployeeComponent,
      componentData: {
        action: 'create'
      }
    });
  }
  
  updateEmpData(){
    this.exchangeData.sidePanel.subscribe((data) => { 
      if(data && !data.isOpen && data.componentData) {
        let panelData: any = data.componentData;
        if(panelData.action == 'create') {
          this.empData.push(data.componentData);
        } 
      }
    });
  }

}
