import {declareAction, declareAtom, map, v3toV1} from "@reatom/core-v1";
import {atom} from "@reatom/core";
import {connectLogger} from "@reatom/logger";

export const changeClient = declareAction<string>();
export const changeLocation = declareAction<string>();

export const clientAtom = declareAtom<string>('initial client', (on) => {
    on(changeClient, (state, payload) => {
        return state + ' + ' + payload;
    });
});

export const locationAtom = declareAtom<string>('initial location', (on) => {
    on(changeLocation, (state, payload) => {
        return state + ' & ' + payload;
    });
});

export const clientContextAtom = v3toV1(atom<{client: string; location: string}>(ctx => {

    connectLogger(ctx);

    return {
        client: ctx.spy(clientAtom.v3atom),
        location: ctx.spy(locationAtom.v3atom),
    }
}));

export const locationCalcAtom = map(locationAtom, data => data + ' calc');

