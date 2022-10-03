import React, {memo} from "react";
import {useAction, useAtom} from "@reatom/react-v1";
import {changeClient, changeLocation, clientContextAtom, locationCalcAtom} from "../models/clent-context";

export const ClientContext = memo(() => {

    const clientContext = useAtom(clientContextAtom);
    const locationCalc = useAtom(locationCalcAtom);
    const changeClientAction = useAction(changeClient);
    const changeLocationAction = useAction(changeLocation);

    const handleChangeClient = () => {
        changeClientAction('new client');
    }

    const handleChangeLocation = () => {
        changeLocationAction('new location');
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Reatom store</h3>
            <div>{clientContext.client}</div>
            <div>{clientContext.location}</div>
            <div>{locationCalc}</div>
            <br/>
            <button onClick={handleChangeClient}>update client</button>
            <button onClick={handleChangeLocation}>update location</button>
        </div>
    )
})