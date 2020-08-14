import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';

@Component({
  selector: 'app-timesheet-entries',
  templateUrl: './timesheet-entries.component.html',
  styleUrls: ['./timesheet-entries.component.scss']
})
export class TimesheetEntriesComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService
  ) { }

  @Input() data: any;
  formData = [
    { 
      date: "",
      project: "",
      totalHour: "",
      activity: "",
      status: "Submitted"
    }
  ];

  ngOnInit(): void {
  }

  close() {
    this.exchangeData.setSidePanel({
      isOpen: false,
    });
  }

  addTime() { 
    let fieldKey = { 
      date: "",
      project: "",
      totalHour: "",
      activity: "",
      status: "Submitted"
    };
    this.formData.unshift(fieldKey);
  }

  deleteTime(index: number) {
    this.formData.splice(index, 1);
  }

}
