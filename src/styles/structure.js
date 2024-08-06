/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 6:52:06 PM
 *  Last update: 6 Aug 2024, 10:39:59 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet, Platform } from "react-native";

// global style variables
export const SCREEN_PADDING = 30;
export const ITEM_PADDING = 20;

export default StyleSheet.create({
    container: {
        // account for notch and camera
        paddingTop: Platform.OS === "ios" ? 60 : 45,
        flex: 1,
        alignItems: "stretch",
    },

    navContainer: {
        padding: SCREEN_PADDING,
    },
});