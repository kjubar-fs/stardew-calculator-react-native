/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:41:01 PM
 *  Last update: 7 Aug 2024, 12:57:45 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";
import { darkColor } from "../../styles/structure";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: darkColor,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
});