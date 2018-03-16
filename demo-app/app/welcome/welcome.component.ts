import { Component, OnInit } from '@angular/core';
import { Coverage, Branch, Detail } from '../models/index';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import fetchBranchInfo from '../gql/fetchBranchInfo';

const COVERAGE: any = require('../../../coverage/coverage-summary.json');

@Component({
    selector: 'welcome-app',
    templateUrl: './welcome.html',
    styleUrls: ['welcome.scss']
})

export class WelcomeComponent implements OnInit {
    service: string = 'nui-ignite-design-system';
    coverageData: Coverage = COVERAGE.total;
    masterBranchData: Branch;
    developBranchData: Branch;


    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getServiceInfo();
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
            });
    }

    /**
     * 
     * Currently throws Error to console
     * ERROR TypeError: Cannot read property 'includes' of null
     */
    buildBackgroundColor(status: string): string {
        if (status.includes('SUCCEEDED')) {
            return 'rgb(80, 158, 47)';
        } else {
            return '#DC143C';
        }
    }

    coverageBackgroundColor(detail: Detail): string {
        if (detail.pct <= 15) {
            return '#DC143C';
        } else if (detail.pct <= 45) {
            return '#FFA500';
        } else if (detail.pct <= 65) {
            return '#F0E68C';
        } else if (detail.pct <= 80) {
            return '#808000';
        } else if (detail.pct <= 90) {
            return '#90EE90';
        } else {
            return 'rgb(80, 158, 47)';
        }
    }
}