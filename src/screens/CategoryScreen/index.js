/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 5 Aug 2024, 8:17:21 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableHighlight } from "react-native";

export default function CategoryScreen({ navigation }) {
    return (
        <View>
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