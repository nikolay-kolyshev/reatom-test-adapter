import {createEvent, createStore} from "effector";

export const changeTheme = createEvent();

export const $theme = createStore<string>('dark');

$theme.on(changeTheme, state => state + ' [updated]');