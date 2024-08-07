/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 6:52:06 PM
 *  Last update: 7 Aug 2024, 12:32:49 PM
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
export const safeAreaPadding = Platform.OS === "ios" ? 60 : 45
export const screenPadding = 30;
export const gapPadding = 20;
export const cardPadding = 15;

// border
export const borderRadius = 15;
export const borderWidth = 3;

export default StyleSheet.create({
    // app component styles
    bgImage: {
        flex: 1,
    },

    container: {
        // account for notch and camera
        paddingTop: safeAreaPadding,
        flex: 1,
        alignItems: "stretch",
    },

    // global styles
    navContainer: {
        padding: screenPadding,
    },

    titleH1: {
        fontWeight: "bold",
        fontSize: 24,
    },

    titleH2: {
        fontWeight: "bold",
        fontSize: 21,
    },

    titleH3: {
        fontWeight: "bold",
        fontSize: 18,
    },

    cardWithBorder: {
        backgroundColor: lightColor,
        borderColor: darkColor,
        borderWidth: borderWidth,
        borderRadius,
        padding: cardPadding,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
});