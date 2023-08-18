import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  
  collapsed: boolean = false;
  
  constructor(
    public templateService: TemplateService
  ) {}

  ngOnInit() {
    this.templateService.getMessage().subscribe(res => {
      this.collapsed = this.templateService.collapsed;
    })
  }
}
