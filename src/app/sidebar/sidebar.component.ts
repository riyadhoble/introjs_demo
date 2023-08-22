import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  introJS = introJs();
  constructor() {}

  startStep() {
    this.introJS
      .setOptions({
       steps: [
       {
         element: '#step1-li',
         intro: 'Welcome to steps on the sidebar!',
         position: 'bottom'
       },
       {
         element: '#step2-li',
         intro: "Select your favorite item",
         position: 'right'
       },
       {
         element: '#step3-li',
         intro: "Place the order",
         position: 'top'
       },
       {
         element: '#step4-li',
         intro: 'Track you order.',
         position: 'right'
       }
     ],
     hidePrev: true,
     hideNext: false
    })
    .start();
  }

  ngOnInit(): void {}

  startSteps(): void {}
}
