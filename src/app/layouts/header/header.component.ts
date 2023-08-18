import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';

interface Config {
  label: string;
  icon: string;
  link: string
}
interface Lang {
  label: string,
  value: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Options: Config[] = [];

  langs: Lang[] = [
    {
      label: 'En',
      value: 'En'
    },
    {
      label: 'Ar',
      value: 'Ar'
    },
    {
      label: 'Fr',
      value: 'Fr'
    }
  ];
  language: Lang = {
    label: 'En',
    value: 'En'
  }

  currentUser: any = {
    name: 'Mike Cage',
    role: 'Speakout Admin',
    avatar: 'https://images.unsplash.com/photo-1691020642156-23b895a41895?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  }
  
  constructor(
    private templateService: TemplateService
  ) {
    
  }
  ngOnInit() {}

  

  collapseSidebar() {
    this.templateService.collapsed = !this.templateService.collapsed;
    this.templateService.setMessage('Collapse Sidebar');
  }
}
