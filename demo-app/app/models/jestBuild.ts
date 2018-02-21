export interface JestBuild {
    testsuites?: number;
    tests?: number;
    failedTestsuites?: number;
    failedTests?: number;
    snapshot?: SnapShot;
    testResults?: TestResults[];
}

interface SnapShot {
    matched?: number;
    unmatched?: number;
    total?: number;
    didUpdate?: boolean;
}

interface TestResults {
    assertionResults?: AssertionResults[];
    endTime?: number;
    message?: string;
    name?: string;
    startTime?: number;
    status?: string;
    summary?: string;
}

interface AssertionResults {
    ancestorTitles?: string[];
    failureMessages?: string[];
    fullName?: string;
    status?: string;
    title?: string;
}