import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timesheet-workspace',
  templateUrl: './timesheet-workspace.component.html',
  styleUrls: ['./timesheet-workspace.component.scss']
})
export class TimesheetWorkspaceComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService,
    private dataService: DataService
  ) { }

  dateFilter = 'this-month';
  statusFilter = 'All';
  billingStatusFilter = 'All';
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
  displayedColumns: string[] = ['selection', 'date', 'totalHour', 'activity', 'status', 'remarks', 'billingStatus'];
  dataSource: any;
  apiUrl = 'approvalTimesheet';

  @Input() data: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  page: number = 1;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData(this.apiUrl).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; 
    });
  }

  close() {
    this.exchangeData.setSidePanel({
      isOpen: false,
    });
  }

}
