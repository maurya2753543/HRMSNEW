import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { TimesheetEntriesComponent } from 'src/app/components/timesheet-entries/timesheet-entries.component';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor(private exchangeData: ExchangeDataService) { }

  dateFilter = 'this-month';
  statusFilter = 'All';
  dateFilterList = [
    {
      id: 0,
      value: "This Month (MAY 2020)",
      key: "this-month"
    },
    {
      id: 1,
      value: "Last Month (APR 2020)",
      key: "last-month"
    },
    {
      id: 2,
      value: "Last 3 Months (MAR - MAY 2020)",
      key: "last-three-months"
    },
    {
      id: 3,
      value: "Last 6 Months (DEC 2020 - MAY 2020)",
      key: "last-six-months"
    },
    {
      id: 4,
      value: "Last Year (2019)",
      key: "last-year"
    },
    {
      id: 5,
      value: "Custom Date",
      key: "custom-date"
    }
  ];

  ngOnInit(): void {
  }

  fillTimesheet() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '1100px',
      component: TimesheetEntriesComponent,
      componentData: {
        projectName: "MHK Admin App"
      }
    });
  }

}
