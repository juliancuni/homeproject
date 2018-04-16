import { Injectable } from '@angular/core';
@Injectable()
export class AppSettings {
    //Percakto te dhenat per app. Psh versioni, copyright, design, layout. 
    //Offline he per he, por mendo per online
    public app: any;
    public layout: any;

    constructor() {
        this.app = {
            emer: "HomeProject",
            pershkrim: "Inventar, shpenzime, personale etj",
            vit: ((new Date()).getFullYear()),
            version: "0.0.0",
            developer: "JÇ"
        }
    }
    gjejAppSeetings() {
        return this.app;
    }
    setAppSettings(emer, value) {
        if (typeof this.app[emer] !== 'undefined') {
            this.app[emer] = value;
        } else {
            alert("Problem ne vleresim. App emer nuk eshte i vlefshem!")
        }
    }
}