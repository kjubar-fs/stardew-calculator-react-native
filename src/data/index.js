/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:43:31 PM
 *  Last update: 8 Aug 2024, 2:20:54 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import * as settings from "./state/settingsSlice";

import { setProfessionActive } from "./db/write";

/**
 * Set the value of the specified profession setting for the given user.
 * @param {string} userId user ID to update setting for
 * @param {string} profession profession name
 * @param {boolean} value setting value
 * @param {Dispatch<UnknownAction>} dispatch dispatch used for updating state
 * @returns 
 */
export async function setProfessionSetting(userId, profession, value, dispatch) {
    // get capitalized title to access reducer by name
    const profTitle = `${profession[0].toUpperCase()}${profession.slice(1)}`

    // check we were given a valid profession
    if (!(`set${profTitle}` in settings)) {
        console.log("no function");
        return false;
    }
    const updateFunc = settings[`set${profTitle}`];

    // assume update will complete and update store first
    dispatch(updateFunc(value));

    // run db update
    const success = await setProfessionActive(userId, profession, value);

    // revert store if db update failed
    if (!success) {
        dispatch(updateFunc(!value));
        return false;
    }

    return true;
}