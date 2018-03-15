import gql from 'graphql-tag';

export const SubscriptionRepositoryChanged = gql`
repositoryChanged(types: $types, project: $project, repo: $repo, branches: $branches) {
    type
    repo {
      slug
      id
      name
      state
      project
      url
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
    branchName
    fromHash
    from {
      id
    }
    toHash
    to {
      id
    }
  }
    }
`;