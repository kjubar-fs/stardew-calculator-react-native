/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:43:21 PM
 *  Last update: 5 Aug 2024, 8:38:24 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableHighlight } from "react-native";

import globalStyles from "../../styles/structure";

export default function ItemListScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Item list screen goes here.</Text>
            <TouchableHighlight
                onPress={() => navigation.navigate("ItemDetail", { itemName: "Parsnip", })}
                underlayColor="#6AE"
            >
                <Text style={{ color: "#333" }}>Go to item details</Text>
            </TouchableHighlight>
        </View>
    );
}