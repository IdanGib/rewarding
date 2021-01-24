import { State } from "./interfaces";

export class AppState implements State {
    private readonly key = 'state';
    kids: [];
    profile: {
        display: '';
        image: ''
    };
    gifts: [];
    
    constructor() {
        try {
            this.load();
        } catch(e) {}
    }
    
    private load() {
        try {
            const json = localStorage.getItem(this.key);
            if(json) {
                const obj = JSON.parse(json);
                this.gifts = obj.gifts;
                this.kids = obj.kids;
                this.profile = obj.profile;
            }
            console.log('load success:', this);
        } catch(e) {
            console.error('load:', e);
            alert('fail to load state');
        }
        
    }
    public save() {
        try {
            const { gifts, kids, profile } = this;
            const json = JSON.stringify({ gifts, kids, profile });
            localStorage.setItem(this.key, json);
        } catch(e) {
            console.error('save:', e);
            alert('fail to save state');
        }

    }
}
