import {PlayerState} from "./types";


export class GlobalState{
    states: Map<number, PlayerState>
    playerCount: number;
    constructor() {
        this.states = new Map();
        this.playerCount = 0;
    }
}

export let GS: GlobalState = new GlobalState();