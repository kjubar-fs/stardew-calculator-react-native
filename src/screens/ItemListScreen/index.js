/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:43:21 PM
 *  Last update: 9 Aug 2024, 10:35:10 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { ScrollView } from "react-native";

import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import globalStyles from "../../styles/structure";

export default function ItemListScreen({ navigation, route }) {
    const allItems = useSelector((state) => state.items);
    const itemList = Object.values(allItems).filter((item) => item.category === route.params.category.id);

    return (
        <ScrollView
            style={globalStyles.navContainer}
            contentContainerStyle={globalStyles.scrollContainer}
        >
            {itemList.map((item) => (
                <ButtonWithIcon
                    key={item.id}
                    onPress={() => navigation.navigate("ItemDetail", { itemName: item.name, id: item.id })}
                    caption={item.name}
                />
            ))}
        </ScrollView>
    );
}