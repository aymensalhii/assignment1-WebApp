import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  user: any;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.dataService.getUserDetails(data['id']).subscribe(res => {
        this.user = res;
      })
    })
  }
}
