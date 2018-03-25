import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    users = USERS; 
    
    selectedUser: User;
    
  constructor() { }

  ngOnInit() {
  }
    
    onSelect(user: User): void {
        this.selectedUser = user;
    }
    

}
