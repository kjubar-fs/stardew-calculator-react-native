/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 7 Aug 2024, 4:24:24 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleRancher: (state) => {
            state.professions.rancher = !state.professions.rancher;
        },

        toggleTiller: (state) => {
            state.professions.tiller = !state.professions.tiller;
        },
        
        toggleArtisan: (state) => {
            state.professions.artisan = !state.professions.artisan;
        },
        
        toggleTapper: (state) => {
            state.professions.tapper = !state.professions.tapper;
        },
        
        toggleGemologist: (state) => {
            state.professions.gemologist = !state.professions.gemologist;
        },
        
        toggleBlacksmith: (state) => {
            state.professions.blacksmith = !state.professions.blacksmith;
        },
        
        toggleFisher: (state) => {
            state.professions.fisher = !state.professions.fisher;
        },
        
        toggleAngler: (state) => {
            state.professions.angler = !state.professions.angler;
        },
    },
});

export const {
    toggleRancher, toggleTiller, toggleArtisan,
    toggleTapper,
    toggleGemologist, toggleBlacksmith,
    toggleFisher, toggleAngler
} = settingsSlice.actions;

export default settingsSlice.reducer;