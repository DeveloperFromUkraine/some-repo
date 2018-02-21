import { Component, OnInit } from '@angular/core';
import { Coverage, JestBuild, Branch, Detail } from '../models/index';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import fetchBranchInfo from '../gql/fetchBranchInfo';

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
    service: string = 'nui-ignite-design-system';
    coverageData: Coverage = COVERAGE.total;
    buildData: JestBuild = BUILD;
    masterBranchData: Branch;
    developBranchData: Branch;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getServiceInfo();

        console.dir(this.coverageData);
        console.dir(this.buildData);
    }

    getServiceInfo() {
        this.apollo.watchQuery<any>({
            query: fetchBranchInfo,
            variables: {
                slug: this.service
            }
        })
            .valueChanges
            .subscribe(response => {
                console.log(response.data.serviceBySlug.branches);
                this.developBranchData = response.data.serviceBySlug.branches.values[0].builds[0];
                this.masterBranchData = response.data.serviceBySlug.branches.values[1].builds[0];

                console.dir(this.masterBranchData);
                console.dir(this.developBranchData);
            });
    }

    formatString(text: string): string {
        return text.charAt(0) + text.toLowerCase().slice(1);
    }

    coverageBackgroundColor(detail: Detail): string {
        if (detail.pct <= 15) {
            //red
            return '#DC143C';
        } else if (detail.pct <= 45) {
            //orange
            return '#FFA500';
        } else if (detail.pct <= 65) {
            //khaki
            return '#F0E68C';
        } else if (detail.pct <= 80) {
            //olive
            return '#808000';
        } else if (detail.pct <= 90) {
            //light-green
            return '#90EE90';
        } else {
            //green
            return '#008000';
        }
    }
}