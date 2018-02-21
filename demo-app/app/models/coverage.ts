export interface Coverage {
    branches?: Detail;
    functions?: Detail;
    lines?: Detail;
    statements?: Detail;
}

export interface Detail {
    covered?: number;
    pct?: number;
    skipped?: number;
    total?: number;
}