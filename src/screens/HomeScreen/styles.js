/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 12:28:21 PM
 *  Last update: 6 Aug 2024, 12:56:54 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";
import {
    lightColor, darkColor,
    gapPadding, cardPadding,
    borderRadius, borderWidth
} from "../../styles/structure";

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: gapPadding,
    },

    titleContainer: {
        gap: 10,
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