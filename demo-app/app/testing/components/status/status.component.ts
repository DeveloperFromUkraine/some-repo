import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Service, Branches, Values, Builds } from "../../../models/index";
import gql from 'graphql-tag';

import fetchServiceInfo from '../../../gql/fetchServiceInfo';

import { JestBuild, TestResults } from '../../../models/index';

import { SubscriptionRepositoryChanged } from '../../../gql/subscriptionRepositoryChanged';

const BUILD: any = require('../../../../../test/jest-output.json');

@Component({
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
    data: Service = {};
    service: string = 'nui-ignite-design-system';
    limit: number = 5;
    masterBranch: Values;
    developBranch: Values;

    buildData: JestBuild = BUILD;
    componentList: any[];

    showTabContent: boolean;

    queryRef: QueryRef<any>;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        console.log('Jest Build Data');
        console.dir(this.buildData);

        this.queryRef = this.apollo.watchQuery<any>({
            query: fetchServiceInfo,
            variables: {
                slug: this.service
            }
        });

        this.getServiceInfo();
        this.buildComponentList();
        this.getSubscriptionInfo();
    }

    getSubscriptionInfo() {
        this.queryRef.subscribeToMore({
            document: SubscriptionRepositoryChanged,
            variables: {
                types: [
                    "BRANCH_COMMITTED_TO"
                ],
                project: "nui",
                repo: "ignite-design-system",
                branches: [
                    "master",
                    "develop"
                ]
            },
            updateQuery: (prev, {subscriptionData}) => {
                if (!subscriptionData.data) {
                    return prev;
                }

                //Insert event response here

                /**
                 * TEMPORARY WORKAROUND 3-23-18
                 * Subscriptions on Bakery API are not working at the moment.
                 */
                this.getServiceInfo();
                this.buildComponentList();
            }
        });
    }

    getServiceInfo() {
        this.queryRef
            .valueChanges
            .subscribe(response => {
                this.data = response.data.serviceBySlug;
                console.dir(this.data);

                let values = this.data.branches.values;
                for (let value of values) {
                    if (value.displayId === 'master') {
                        this.masterBranch = value;
                    }
                    else if (value.displayId === 'develop') {
                        this.developBranch = value;
                    }
                }
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

    componentStatusColor(build: TestResults): string {
        if (build.status === 'passed') {
            return 'rgb(80, 158, 47)';
        } else {
            return '#DC143C';
        }
    }

    /**
     * Workaround - Will revisit and phase out at a later time. 
     */
    reloadTabs() {
        this.showTabContent = false;
        setTimeout(() => {
            this.showTabContent = true
        }, 250);
    }
}
