/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 6:52:06 PM
 *  Last update: 6 Aug 2024, 12:47:35 PM
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
export const gapPadding = 20;
export const cardPadding = 15;

// border
export const borderRadius = 15;
export const borderWidth = 3;

const baseTitleStyle = {
    fontWeight: "bold",
    color: darkColor,
}

export default StyleSheet.create({
    // app component styles
    bgImage: {
        flex: 1,
    },

    container: {
        // account for notch and camera
        paddingTop: Platform.OS === "ios" ? 60 : 45,
        flex: 1,
        alignItems: "stretch",
    },

    // global styles
    navContainer: {
        padding: screenPadding,
    },

    titleH1: {
        ...baseTitleStyle,
        fontSize: 24,
    },

    titleH2: {
        ...baseTitleStyle,
        fontSize: 21,
    },

    titleH3: {
        ...baseTitleStyle,
        fontSize: 18,
    },

    bodyText: {
        color: darkColor,
    },
});