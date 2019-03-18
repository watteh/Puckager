import { Component, OnInit } from '@angular/core';

import Recruit from '../../models/Recruit';

import {RecruitService } from '../services/recruit.service';


@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {

   recruits: Recruit[];
  //   {
  //     id: 1,
  //     first_name: 'David',
  //     last_name: 'Gwynn',
  //     birth_year: 2000,
  //     position: 'Defense',
  //     status: 'Available'
  //   },
  //   {
  //     id: 2,
  //     first_name: 'Ryan',
  //     last_name: 'Watson',
  //     birth_year: 2001,
  //     position: 'Goalie',
  //     status: 'Committed'
  //   }
  // ];

  // positions = [
  //   {name: 'Forward'},
  //   {name: 'Defenceman'},
  //   {name: 'Goalie'}
  // ];

  constructor(private rs: RecruitService) { }

  ngOnInit() {
    this.rs.getRecruits().subscribe((data: Recruit[]) => {
      this.recruits = data;
    });
  }
  
}
