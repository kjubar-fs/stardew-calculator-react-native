/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:08:18 PM
 *  Last update: 5 Aug 2024, 8:34:57 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import globalStyles from "../../styles/structure";

export default function HomeScreen() {
    return (
        <View style={globalStyles.navContainer}>
            <Text>Hello, Stardew!</Text>
        </View>
    );
}