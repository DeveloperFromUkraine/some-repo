import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular/Apollo";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Service } from "../../models/service";
import gql from 'graphql-tag';


@Component({
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
    data: Service;
    service: string = 'nui-ignite-design-system';
    limit: number = 5;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getServiceInfo();
    }

    getBorder() {
        return `10px solid ${this.data.metrics.status.toLowerCase()}`;
    }

    getServiceInfo() {
        this.apollo.watchQuery<any>({
            query: gql`
                query serviceBySlug($slug: String!) {
                    serviceBySlug(slug: $slug) {
                        name
                        metrics {
                            status
                            greenSinceDate
                            lastFailure {
                                job
                                time
                                author
                                branchName
                                concourseUrl
                                branchType
                                status
                                commitMessage
                                commitHash
                            }
                            lastSuccess {
                                job
                                time
                                author
                                branchName
                                concourseUrl
                                branchType
                                status
                                commitMessage
                                commitHash
                            }
                        }
                        project
                        repoUrl
                        branches(types: [MASTER, DEVELOP]) {
                            values {
                                displayId
                                url
                                latestCommit {
                                    author {
                                        displayName
                                        emailAddress
                                        avatarUrl
                                    }
                                    message
                                }
                                builds(limit: 5) {
                                    author
                                    time
                                    branchName
                                    concourseUrl
                                    branchType
                                    duration
                                    pipeline
                                    status
                                    commitMessage
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                slug: this.service
            }
        })
            .valueChanges
            .subscribe(response => {
                this.data = response.data.serviceBySlug;
                console.dir(this.data);
            });
    }
}