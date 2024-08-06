/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 12:28:21 PM
 *  Last update: 6 Aug 2024, 1:46:40 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";
import globalStyles, { lightColor, gapPadding } from "../../styles/structure";

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
        ...globalStyles.cardWithBorder,
        gap: 10,
    },

    introBodyContainer: {
        gap: gapPadding,
    },

    introText: {
        textAlign: "center",
    },
});