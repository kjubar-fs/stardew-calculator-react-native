/*
 *  Author: Kaleb Jubar
 *  Created: 8 Aug 2024, 5:15:51 PM
 *  Last update: 8 Aug 2024, 5:28:49 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet, Platform } from "react-native";

import { screenPadding, gapPadding } from "../../styles/structure";

export default StyleSheet.create({
    container: {
        paddingBottom: screenPadding + (Platform.OS === "ios" ? screenPadding : gapPadding),
        gap: gapPadding,
    },
});