/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:17:44 PM
 *  Last update: 7 Aug 2024, 4:25:13 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./settingsSlice";

export default store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
});