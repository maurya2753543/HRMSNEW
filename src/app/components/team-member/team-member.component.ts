import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  constructor(private dataService: DataService) { }

  apiUrl = 'employee';
  empData: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let url = `${this.apiUrl}?project=MHK Admin App`;
    this.dataService.getData(url).subscribe((res) => {
      this.empData = res;
    });
  }

}
