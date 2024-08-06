/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 11:02:59 AM
 *  Last update: 6 Aug 2024, 12:05:04 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform, StyleSheet } from "react-native";

import { darkColor, lightColor } from "../../styles/structure";

export default StyleSheet.create({
    container: {
        backgroundColor: lightColor,
        flexDirection: 'row',
        padding: 20,
        paddingBottom: Platform.OS === "ios" ? 35 : 20,

        borderTopColor: darkColor,
        borderTopWidth: 3,
    },

    label: {
        textAlign: "center",
    },
});