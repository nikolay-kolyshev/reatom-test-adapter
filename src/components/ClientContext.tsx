import React, {memo} from "react";
import {useAction, useAtom} from "@reatom/react";
import {changeClient, clientAtom} from "../models/clent-context";

const ClientContextComponent = memo(() => {

    const client = useAtom(clientAtom);
    const changeClientAction = useAction(changeClient);

    const handleChangeClient = () => {
        changeClientAction('new client');
    }

    return (
        <div>
            <div>
                {client}
        </div>
        <button onClick={handleChangeClient}>update client</button>
    </div>
)
})