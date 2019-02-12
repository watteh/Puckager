import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {

  recruits = [
    {
      id:1,
      first_name: 'David',
      last_name: 'Gwynn',
      birth_year:2000,
      position: 'Defense',
      status: 'Available'
    },
    {
      id:2,
      first_name: 'Ryan',
      last_name: 'Watson',
      birth_year:2001,
      position: 'Goalie',
      status: 'Committed'
    }
  ];

  positions = [
    {name: 'Forward'},
    {name: 'Defenceman'},
    {name: 'Goalie'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
