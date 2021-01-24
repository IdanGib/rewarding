import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.scss']
})
export class KidComponent implements OnInit {
  title = 'Kid';
  constructor() { }

  ngOnInit(): void {
  }

}
