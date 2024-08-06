/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 1:31:04 PM
 *  Last update: 6 Aug 2024, 1:55:00 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import globalStyles from "../../styles/structure";

export default StyleSheet.create({
    button: {
        ...globalStyles.cardWithBorder,
        alignItems: "center",
    },

    caption: {
        textAlign: "center",
        flexGrow: 1,
    },
});