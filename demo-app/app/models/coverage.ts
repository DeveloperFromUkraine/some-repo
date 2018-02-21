export interface Coverage {
    branches?: Detail;
    functions?: Detail;
    lines?: Detail;
    statements?: Detail;
}

interface Detail {
    covered?: number;
    pct?: number;
    skipped?: number;
    total?: number;
}