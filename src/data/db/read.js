/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:51:59 PM
 *  Last update: 7 Aug 2024, 5:43:09 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { doc, getDoc } from "firebase/firestore";

import { db, settingsColl } from "./config";

// TODO: remove hardcoded ID
import { userId as myId } from "../../includes/variables";

/**
 * Load a user's settings from the database.
 * @param {string} userId user ID to load settings for
 * @returns an object representing the user's settings
 */
export async function loadUserSettings(userId) {
    // TODO: remove hardcoded ID
    userId = myId;

    // get snapshot for user settings document
    const settingsSnap = await getDoc(doc(db, settingsColl, userId));

    // return null if we don't have data (ID doesn't exist)
    if (!settingsSnap.exists()) {
        return null;
    }

    // return the data from the snapshot
    return settingsSnap.data();
}