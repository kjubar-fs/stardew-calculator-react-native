/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 5:44:38 PM
 *  Last update: 8 Aug 2024, 2:38:27 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSettings } from "../../data/state/settingsSlice";

import { loadUserSettings } from "../../data/db/read";

export default function AppLoader() {
    // TODO: replace with loading user ID from local DB or creating
    const userId = useSelector((state) => state.settings.userId);
    const dispatch = useDispatch();

    // create a mount effect to load
    useEffect(() => {
        (async () => {
            // load settings
            const settings = await loadUserSettings(userId);
            dispatch(setSettings(settings));

            SplashScreen.hideAsync();
        })();
    }, []);
}