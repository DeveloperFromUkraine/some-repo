import gql from 'graphql-tag';

const fetchBranchInfo = gql`
                query serviceBySlug($slug: String!) {
                    serviceBySlug(slug: $slug) {
                        branches(types: [MASTER, DEVELOP]) {
                            values {
                                builds(limit: 1) {
                                    branchName
                                    concourseUrl
                                    status
                                }
                            }
                        }
                    }
                }
            `

export default fetchBranchInfo;