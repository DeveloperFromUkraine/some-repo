import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular/Apollo";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Service, Branches, Values, Builds } from "../../../models/index";
import gql from 'graphql-tag';

import fetchServiceInfo from '../../gql/fetchServiceInfo';

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

    showTabContent: boolean;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getServiceInfo();
    }

    getServiceInfo() {
        this.apollo.watchQuery<any>({
            query: fetchServiceInfo,
            variables: {
                slug: this.service
            }
        })
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
