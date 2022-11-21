import Router from 'express';
const router = new Router();
import {GS} from "./global_state";
import {EnterResponse, UpdateRequest, UpdateResponse} from "./types";

async function enter(req: any, res: any){
    GS.playerCount += 1;
    const id = GS.playerCount;
    return res.json({id: id, res: true});
}

async function update(req: any, res: any){
    const U = req.body as UpdateRequest;
    if(U){
        GS.states.set(U.id, {time: U.time, location: U.location, rotation: U.rotation, speed: U.speed});
        let Res: UpdateResponse = {times: [], ids: [], locations: [], rotations: [], speeds: [], res: true};
        GS.states.forEach( (PS, id) => {
            Res.ids.push(id);
            Res.times.push(PS.time);
            Res.locations.push(PS.location);
            Res.rotations.push(PS.rotation);
            Res.speeds.push(PS.speed);
        });
        console.log(U)
        return res.json(Res);
    }
    else{
        return res.json({ids: [], times: [], locations: [], rotations: [], speeds: [], res: false});
    }
}

router.post('/enter', enter);
router.post('/update', update);

export default router;