import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { TimesheetWorkspaceComponent } from '../timesheet-workspace/timesheet-workspace.component';

@Component({
  selector: 'app-emp-timesheet-detail-card',
  templateUrl: './emp-timesheet-detail-card.component.html',
  styleUrls: ['./emp-timesheet-detail-card.component.scss']
})
export class EmpTimesheetDetailCardComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService
  ) { }

  @Input() data: any;

  ngOnInit(): void {
  }

  ViewTimesheet() {
    this.exchangeData.setSidePanel({
      isOpen: true,
      width: '1200px',
      component: TimesheetWorkspaceComponent,
      componentData: {
        employeeName: "Lekhnarayan Pandey"
      }
    });
  }

}
