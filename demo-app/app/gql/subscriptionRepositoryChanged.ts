import gql from 'graphql-tag';

export const SubscriptionRepositoryChanged = gql`
    subscription($types: [RepoChangeType], $project: String!, $repo: String!, $branches: [String]) {
        repositoryChanged(types: $types, project: $project, repo: $repo, branches: $branches) {
            type
            repo {
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
    }
`;