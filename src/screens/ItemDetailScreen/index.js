/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:43:32 PM
 *  Last update: 9 Aug 2024, 10:37:15 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import globalStyles from "../../styles/structure";
import { useSelector } from "react-redux";

export default function ItemDetailScreen({ route }) {
    const item = useSelector((state) => state.items[route.params.id]);

    return (
        <View style={globalStyles.navContainer}>
            <View style={globalStyles.cardWithBorder}>
                <Text>{JSON.stringify(item, null, 4)}</Text>
            </View>
        </View>
    );
}