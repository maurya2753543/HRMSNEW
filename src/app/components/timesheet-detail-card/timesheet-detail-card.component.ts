import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timesheet-detail-card',
  templateUrl: './timesheet-detail-card.component.html',
  styleUrls: ['./timesheet-detail-card.component.scss']
})
export class TimesheetDetailCardComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  displayedColumns: string[] = ['date', 'totalHour', 'activity', 'status', 'remarks', 'action'];
  dataSource: any;
  apiUrl = 'timesheet';

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

}
