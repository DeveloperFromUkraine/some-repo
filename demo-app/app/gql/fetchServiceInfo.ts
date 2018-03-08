import gql from 'graphql-tag';

const fetchServiceInfo = gql`
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
            `

export default fetchServiceInfo;