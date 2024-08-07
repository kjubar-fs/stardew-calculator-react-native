/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:29:55 PM
 *  Last update: 7 Aug 2024, 5:19:27 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { cardPadding } from "../../styles/structure";

export default StyleSheet.create({
    modalBlur: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
    },

    container: {
        gap: cardPadding,
    },

    checkboxGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: cardPadding,
        justifyContent: "space-between",
    },

    checkbox: {
        width: "50%",
    },

    close: {
        position: "absolute",
        top: 10,
        right: 10,
        borderRadius: 5,
    },
});