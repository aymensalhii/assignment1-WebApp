import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleFilter } from 'src/app/shared/interfaces/role-filter';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  filterItems: RoleFilter[] = [];

  roles: RoleFilter[] = [
    {
      label: "Admin",
      value: "admin",
      color: ""
    },
    {
      label: "Journalist",
      value: "journalist",
      color: ""
    },
    {
      label: "Member",
      value: "member",
      color: ""
    }
  ]
  publishers: RoleFilter[] = [
    {
      label: "publisher Admin",
      value: "p-admin",
      color: ""
    },
    {
      label: "publisher Journalist",
      value: "p-journalist",
      color: ""
    },
    {
      label: "publisher Member",
      value: "p-member",
      color: ""
    }
  ]

  status: RoleFilter[] = [
    {
      label: "Not verified",
      value: "notverified",
      color: "#007177"
    },
    {
      label: "Active",
      value: "active",
      color: "#007a02"
    },
    {
      label: "Suspended",
      value: "suspended",
      color: "#c9ab00"
    },
    {
      label: "Blocked",
      value: "blocked",
      color: "#ff3333"
    },
    {
      label: "Deleted",
      value: "deleted",
      color: "#4b6790"
    },
    {
      label: "Deactivated",
      value: "deactivated",
      color: "#2b4060"
    }
  ]

  users: any[] = [];
  filterOptions: string[] = [];
  filteredUsers: any[] = [];
  searchText: string = '';

  caracters: string = '';

  constructor(
    public dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getAllUsers().subscribe(res => {
      this.users = res;
      this.filteredUsers = this.users;
    })

    
  }

  filterUsers() {
    console.log(this.filterItems)
  }

  RemoveFilterOption(i: any) {
    this.filterItems.splice(i,1)
  }

  clearFilter() {
    this.filterItems = [];
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.fullname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectUser(id: string) {
    this.router.navigateByUrl('users/'+id)
  }
}
