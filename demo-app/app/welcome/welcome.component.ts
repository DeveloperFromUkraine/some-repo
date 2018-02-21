import { Component, OnInit } from '@angular/core';
import { Coverage, JestBuild, Branch } from '../models/index';
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
}