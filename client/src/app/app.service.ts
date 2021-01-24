import { Injectable } from '@angular/core';

import { AppState } from 'src/app/logic/state';
import { State } from './logic/interfaces';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor() {
      
    }
    init() {
        AppState.load();
    }
    get state(): State {
        return { gifts: AppState.gifts, profile: AppState.profile, kids: AppState.kids };
    }
}