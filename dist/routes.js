"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = new express_1.default();
const global_state_1 = require("./global_state");
function enter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        global_state_1.GS.playerCount += 1;
        const id = global_state_1.GS.playerCount;
        return res.json({ id: id, res: true });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const U = req.body;
        if (U) {
            global_state_1.GS.states.set(U.id, { time: U.time, location: U.location, rotation: U.rotation, speed: U.speed });
            let Res = { times: [], ids: [], locations: [], rotations: [], speeds: [], res: true };
            global_state_1.GS.states.forEach((PS, id) => {
                Res.ids.push(id);
                Res.times.push(PS.time);
                Res.locations.push(PS.location);
                Res.rotations.push(PS.rotation);
                Res.speeds.push(PS.speed);
            });
            return res.json(Res);
        }
        else {
            return res.json({ ids: [], times: [], locations: [], rotations: [], speeds: [], res: false });
        }
    });
}
router.post('/enter', enter);
router.post('/update', update);
exports.default = router;
