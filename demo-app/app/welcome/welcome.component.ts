import { Component, OnInit } from '@angular/core';
import { Coverage, JestBuild, Branch, Detail, TestResults } from '../models/index';
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

    componentList: any[];

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getServiceInfo();
        this.buildComponentList();

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
                this.developBranchData = response.data.serviceBySlug.branches.values[0].builds[0];
                this.masterBranchData = response.data.serviceBySlug.branches.values[1].builds[0];

                console.dir(this.masterBranchData);
                console.dir(this.developBranchData);
            });
    }

    buildComponentList() {
        this.componentList = this.buildData.testResults;
        this.componentList
            .sort((a, b) => {
                let x = a.assertionResults[0].ancestorTitles[0];
                let y = b.assertionResults[0].ancestorTitles[0];

                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
    }

    buildBackgroundColor(status: string): string {
        if (status.includes('SUCCEEDED')) {
            return 'rgb(80, 158, 47)';
        } else {
            return '#DC143C';
        }
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
            return 'rgb(80, 158, 47)';
        }
    }

    componentStatusColor(build: TestResults): string {
        if (build.status === 'passed') {
            return 'rgb(80, 158, 47)';
        } else {
            return '#DC143C';
        }
    }
}