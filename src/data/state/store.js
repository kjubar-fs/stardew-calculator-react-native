/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:17:44 PM
 *  Last update: 8 Aug 2024, 3:31:32 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./settingsSlice";
import itemDataReducer from "./itemDataSlice";
import categoriesReducer from "./categoriesSlice";

export default store = configureStore({
    reducer: {
        settings: settingsReducer,
        items: itemDataReducer,
        categories: categoriesReducer,
    },
});