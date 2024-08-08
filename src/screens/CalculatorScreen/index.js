/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:08:13 PM
 *  Last update: 8 Aug 2024, 2:44:42 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import globalStyles from "../../styles/structure";

export default function CalculatorScreen() {
    return (
        <View style={globalStyles.navContainer}>
            <View style={globalStyles.cardWithBorder}>
                <Text>Calculator screen goes here.</Text>
            </View>
        </View>
    );
}