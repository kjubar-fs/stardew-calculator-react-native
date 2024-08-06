/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 5 Aug 2024, 8:34:42 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableHighlight } from "react-native";

import globalStyles from "../../styles/structure";

export default function CategoryScreen({ navigation }) {
    return (
        <View style={globalStyles.navContainer}>
            <Text>Category select screen goes here.</Text>
            <TouchableHighlight
                onPress={() => navigation.navigate("ItemList", { category: "Crops", })}
                underlayColor="#6AE"
            >
                <Text style={{ color: "#333" }}>Go to item list</Text>
            </TouchableHighlight>
        </View>
    );
}