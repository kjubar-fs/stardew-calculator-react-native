/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 6:52:06 PM
 *  Last update: 6 Aug 2024, 11:58:33 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet, Platform } from "react-native";

// global style variables
// color
export const darkColor = "#5B2B2A";
export const midDarkColor = "#B14E05";
export const midLightColor = "#DC7B05";
export const lightColor = "#FFD284";

// sizing, padding, and margin
export const screenPadding = 30;
export const itemPadding = 20;

export default StyleSheet.create({
    bgImage: {
        flex: 1,
    },

    container: {
        // account for notch and camera
        paddingTop: Platform.OS === "ios" ? 60 : 45,
        flex: 1,
        alignItems: "stretch",
    },

    navContainer: {
        padding: screenPadding,
    },
});