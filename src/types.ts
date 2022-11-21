export type FVector = [number, number, number];

export interface PlayerState{
    time: number,
    location: FVector,
    rotation: FVector,
    speed: FVector
}

export interface EnterResponse{
    id: number,
    res: boolean
}

export interface UpdateRequest{
    id: number,
    time: number,
    location: FVector,
    rotation: FVector,
    speed: FVector
}

export interface UpdateResponse{
    ids: number[],
    times: number[],
    locations: FVector[],
    rotations: FVector[]
    speeds: FVector[],
    res: boolean
}