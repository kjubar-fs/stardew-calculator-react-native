/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 1:31:04 PM
 *  Last update: 6 Aug 2024, 2:49:05 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import globalStyles from "../../styles/structure";

export default StyleSheet.create({
    button: {
        ...globalStyles.cardWithBorder,
        alignItems: "center",
    },

    buttonPressed: {
        elevation: 0,
        shadowOpacity: 0,
        transform: "translateY(4px)",
    },

    caption: {
        textAlign: "center",
        flexGrow: 1,
    },
});