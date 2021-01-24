import { Component } from '@angular/core';
import { AppState } from 'src/app/logic/state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kids';
  app: AppState;
  constructor() {
    this.app = new AppState();
  }
}
