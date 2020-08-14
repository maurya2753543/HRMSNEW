import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-workspace',
  templateUrl: './employee-workspace.component.html',
  styleUrls: ['./employee-workspace.component.scss']
})
export class EmployeeWorkspaceComponent implements OnInit {
  private empId = this.route.snapshot.paramMap.get('empId');
  
  constructor(
    private exchangeData: ExchangeDataService,
    private loader: LoadingService,
    private route: ActivatedRoute
  ) { 
    this.exchangeData.setViewState('employee-workspace');
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
  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      
      }
    }
  }
}
