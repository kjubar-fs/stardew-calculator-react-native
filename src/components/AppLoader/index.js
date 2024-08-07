/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 5:44:38 PM
 *  Last update: 7 Aug 2024, 6:18:20 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setSettings } from "../../data/state/settingsSlice";

import { loadUserSettings } from "../../data/db/read";

export default function AppLoader() {
    const dispatch = useDispatch();

    // create a mount effect to load
    useEffect(() => {
        (async () => {
            // load settings
            // TODO: replace this with user ID loaded from phone or created
            const settings = await loadUserSettings("");
            dispatch(setSettings(settings));

            SplashScreen.hideAsync();
        })();
    }, []);
}