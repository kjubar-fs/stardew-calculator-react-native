/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 4:20:17 PM
 *  Last update: 8 Aug 2024, 5:08:24 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: -2,
        displayName: "Gems",
    },
    {
        id: -4,
        displayName: "Fish",
    },
    {
        id: -5,
        displayName: "Eggs",
    },
    {
        id: -6,
        displayName: "Milk",
    },
    {
        id: -7,
        displayName: "Cooking",
    },
    {
        id: -8,
        displayName: "Crafting",
    },
    {
        id: -9,
        displayName: "Big Craftables",
    },
    {
        id: -12,
        displayName: "Minerals",
    },
    {
        id: -14,
        displayName: "Meat",
    },
    {
        id: -15,
        displayName: "Metals",
    },
    {
        id: -16,
        displayName: "Building Resources",
    },
    {
        id: -17,
        displayName: "Sell at Pierre's",
    },
    {
        id: -18,
        displayName: "Sell at Pierre's and Marnie's",
    },
    {
        id: -19,
        displayName: "Fertilizer",
    },
    {
        id: -20,
        displayName: "Junk",
    },
    {
        id: -21,
        displayName: "Bait",
    },
    {
        id: -22,
        displayName: "Tackle",
    },
    {
        id: -23,
        displayName: "Sell at Willy's",
    },
    {
        id: -24,
        displayName: "Furniture",
    },
    {
        id: -25,
        displayName: "Ingredients",
    },
    {
        id: -26,
        displayName: "Artisan Goods",
    },
    {
        id: -27,
        displayName: "Syrup",
    },
    {
        id: -28,
        displayName: "Monster Loot",
    },
    {
        id: -29,
        displayName: "Equipment",
    },
    {
        id: -74,
        displayName: "Seeds",
    },
    {
        id: -75,
        displayName: "Vegetables",
    },
    {
        id: -79,
        displayName: "Fruits",
    },
    {
        id: -80,
        displayName: "Flowers",
    },
    {
        id: -81,
        displayName: "Greens",
    },
    {
        id: -95,
        displayName: "Hats",
    },
    {
        id: -96,
        displayName: "Rings",
    },
    {
        id: -98,
        displayName: "Weapons",
    },
    {
        id: -99,
        displayName: "Tools",
    },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
});

// export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;