"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GS = exports.GlobalState = void 0;
class GlobalState {
    constructor() {
        this.states = new Map();
        this.playerCount = 0;
    }
}
exports.GlobalState = GlobalState;
exports.GS = new GlobalState();
