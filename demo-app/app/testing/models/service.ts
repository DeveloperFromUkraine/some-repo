export interface Service {
    name?: string;
    project?: string;
    repoUrl?: string;
    branches?: Branches;
    metrics?: Metrics;
}

export interface Branches {
    values?: Values[];
}

export interface Values {
    displayId?: string;
    url?: string;
    builds?: Builds[];
    latestCommit?: LatestCommit;
}

interface Builds {
    author?: string;
    branchName?: string;
    branchType?: string;
    commitMessage?: string;
    concourseUrl?: string;
    duration?: number;
    pipeline?: string;
    status?: string;
    time?: Date;
}

interface LatestCommit {
    message?: string;
    author?: Author;
}

interface Author {
    avatarUrl?: string;
    displayName?: string;
    emailAddress?: string;
}

interface Metrics {
    greenSinceDate?: Date;
    status?: string;
    lastFailure?: BuildRun;
    lastSuccess?: BuildRun;
}

interface BuildRun {
    author?: string;
    branchName?: string;
    branchType?: string;
    commitMessage?: string;
    commitHash?: string;
    concourseUrl?: string;
    job?: string;
    status?: string;
    time?: Date;
}