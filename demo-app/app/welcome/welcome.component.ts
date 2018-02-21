import { Component, OnInit } from '@angular/core';
import { Coverage, JestBuild } from '../models/index';
import { Apollo } from 'apollo-angular';
const NOTES: string = require('raw-loader!./welcome.md');
const COVERAGE: any = require('../../../coverage/coverage-summary.json');
const BUILD: any = require('../../../test/jest-output.json');

@Component({
    selector: 'welcome-app',
    templateUrl: './welcome.html',
    styleUrls: ['welcome.scss']
})

export class WelcomeComponent implements OnInit {
    notes = NOTES;
    coverageData: Coverage = COVERAGE.total;
    buildData: JestBuild = BUILD;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        console.dir(this.coverageData);
        console.dir(this.buildData);
    }

    getServiceInfo() {

    }
}