/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 5 Aug 2024, 7:04:01 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import styles from "./src/styles/structure";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            
            <Text>Hello, Stardew!</Text>
        </View>
    );
}