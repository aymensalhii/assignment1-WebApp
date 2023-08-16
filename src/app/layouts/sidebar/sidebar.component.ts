import { Component } from '@angular/core';
import { MenuItems } from 'src/app/shared/models/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: MenuItems[] = [
    {
      link: '/dashboard',
      label: 'Dashboard',
      icon: 'bi-layout-text-window-reverse'
    },
    {
      link: '/users',
      label: 'Users',
      icon: 'bi-person'
    },
    {
      link: '/publications',
      label: 'Publications',
      icon: 'bi-newspaper'
    },
    {
      link: '/tags',
      label: 'Tags',
      icon: 'bi-tag'
    },
    {
      link: '/analytics',
      label: 'Analytics',
      icon: 'bi-bar-chart-fill'
    },
    {
      link: '/profile',
      label: 'My Profile',
      icon: 'bi-person'
    },
    {
      link: '/settings',
      label: 'Account Settings',
      icon: 'bi-gear'
    }
  ];
}
