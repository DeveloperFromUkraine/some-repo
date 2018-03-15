import gql from 'graphql-tag';

export const SubscriptionRepositoryChanged = gql`
    subscription($types: [RepoChangeType], $project: String!, $repo: String!, $branches: [String]) {
        repositoryChanged(types: $types, project: $project, repo: $repo, branches: $branches) {
            type
            repo {
                slug
                id
                name
                state
                forkable
                public
                project
                url
            }
        }
    }
`;