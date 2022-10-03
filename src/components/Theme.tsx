import {$theme, changeTheme} from "../models/theme";
import {useEvent, useStore} from "effector-react";
import {memo} from "react";

export const Theme = memo(() => {

    const theme = useStore($theme);
    const changeThemeEvent = useEvent(changeTheme);

    const handleChangeTheme = () => {
        changeThemeEvent();
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Effector store</h3>
            <div>{theme}</div>
            <br/>
            <button onClick={handleChangeTheme}>update theme</button>
        </div>
    )

})