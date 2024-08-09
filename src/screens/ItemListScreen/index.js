/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:43:21 PM
 *  Last update: 9 Aug 2024, 10:15:47 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { ScrollView, Text, TouchableHighlight } from "react-native";

import globalStyles from "../../styles/structure";

export default function ItemListScreen({ navigation }) {
    return (
        <ScrollView
            style={globalStyles.navContainer}
            contentContainerStyle={globalStyles.scrollContainer}
        >
            <Text>Item list screen goes here.</Text>
            <TouchableHighlight
                onPress={() => navigation.navigate("ItemDetail", { itemName: "Parsnip", })}
                underlayColor="#6AE"
            >
                <Text style={{ color: "#333" }}>Go to item details</Text>
            </TouchableHighlight>


        </ScrollView>
    );
}