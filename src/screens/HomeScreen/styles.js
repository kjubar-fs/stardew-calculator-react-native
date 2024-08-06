/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 12:28:21 PM
 *  Last update: 6 Aug 2024, 1:28:34 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";
import {
    lightColor, darkColor,
    gapPadding, cardPadding,
    borderRadius, borderWidth
} from "../../styles/structure";

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
        gap: gapPadding,
        justifyContent: "space-between",
    },

    topContainer: {
        gap: gapPadding,
    },

    bottomContainer: {
        flexShrink: 1,
    },

    titleContainer: {
        gap: 10,
    },

    logo: {
        width: "100%",
        height: 150,
    },

    subtitle: {
        color: lightColor,
        fontSize: 30,
        textAlign: "center",
    },

    introContainer: {
        backgroundColor: lightColor,
        borderRadius,
        padding: cardPadding,
        borderColor: darkColor,
        borderWidth,
        gap: 10,
    },

    introBodyContainer: {
        gap: gapPadding,
    },

    introText: {
        fontSize: 16,
        textAlign: "center",
    },
});