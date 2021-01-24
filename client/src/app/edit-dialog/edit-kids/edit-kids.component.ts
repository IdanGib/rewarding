import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-kids',
  templateUrl: './edit-kids.component.html',
  styleUrls: ['./edit-kids.component.scss']
})
export class EditKidsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
