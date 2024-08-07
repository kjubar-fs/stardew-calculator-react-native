/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 7 Aug 2024, 6:18:03 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settings: {
        professions: {
            rancher: false,
            tiller: false,
            artisan: false,

            tapper: false,

            gemologist: false,
            blacksmith: false,

            fisher: false,
            angler: false,
        },
    },
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSettings: (state, action) => {
            state.settings = action.payload;
        },

        toggleRancher: (state) => {
            state.settings.professions.rancher = !state.settings.professions.rancher;
        },

        toggleTiller: (state) => {
            state.settings.professions.tiller = !state.settings.professions.tiller;
        },
        
        toggleArtisan: (state) => {
            state.settings.professions.artisan = !state.settings.professions.artisan;
        },
        
        toggleTapper: (state) => {
            state.settings.professions.tapper = !state.settings.professions.tapper;
        },
        
        toggleGemologist: (state) => {
            state.settings.professions.gemologist = !state.settings.professions.gemologist;
        },
        
        toggleBlacksmith: (state) => {
            state.settings.professions.blacksmith = !state.settings.professions.blacksmith;
        },
        
        toggleFisher: (state) => {
            state.settings.professions.fisher = !state.settings.professions.fisher;
        },
        
        toggleAngler: (state) => {
            state.settings.professions.angler = !state.settings.professions.angler;
        },
    },
});

export const {
    setSettings,
    toggleRancher, toggleTiller, toggleArtisan,
    toggleTapper,
    toggleGemologist, toggleBlacksmith,
    toggleFisher, toggleAngler
} = settingsSlice.actions;

export default settingsSlice.reducer;