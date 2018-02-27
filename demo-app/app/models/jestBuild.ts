export interface JestBuild {
    testsuites?: number;
    tests?: number;
    failedTestsuites?: number;
    failedTests?: number;
    snapshot?: SnapShot;
    testResults?: TestResults[];
    startTime: Date;
}

export interface SnapShot {
    matched?: number;
    unmatched?: number;
    total?: number;
    didUpdate?: boolean;
}

export interface TestResults {
    assertionResults?: AssertionResults[];
    endTime?: number;
    message?: string;
    name?: string;
    startTime?: number;
    status?: string;
    summary?: string;
}

export interface AssertionResults {
    ancestorTitles?: string[];
    failureMessages?: string[];
    fullName?: string;
    status?: string;
    title?: string;
}