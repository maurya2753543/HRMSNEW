import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-timesheet-approval',
  templateUrl: './timesheet-approval.component.html',
  styleUrls: ['./timesheet-approval.component.scss']
})
export class TimesheetApprovalComponent implements OnInit {

  constructor(private dataService: DataService) { }

  apiUrl = 'timesheetRequest';
  timesheetData: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData(this.apiUrl).subscribe((res) => {
      this.timesheetData = res;
    });
  }

}
