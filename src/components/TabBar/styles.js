/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 11:02:59 AM
 *  Last update: 8 Aug 2024, 5:21:01 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform, StyleSheet } from "react-native";

import { darkColor, lightColor, gapPadding, screenPadding } from "../../styles/structure";

export default StyleSheet.create({
    container: {
        backgroundColor: lightColor,
        flexDirection: 'row',
        padding: gapPadding,
        paddingBottom: Platform.OS === "ios" ? screenPadding : gapPadding,

        borderTopColor: darkColor,
        borderTopWidth: 3,
    },

    label: {
        textAlign: "center",
    },
});