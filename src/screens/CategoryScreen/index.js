/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 9 Aug 2024, 10:16:23 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { ScrollView } from "react-native";

import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import globalStyles from "../../styles/structure";

export default function CategoryScreen({ navigation }) {
    const categoryList = useSelector((state) => state.categories);

    return (
        <ScrollView
            style={globalStyles.navContainer}
            contentContainerStyle={globalStyles.scrollContainer}
        >
            {categoryList.map((category) => (
                <ButtonWithIcon
                    key={category.id}
                    onPress={() => navigation.navigate("ItemList", { category })}
                    caption={category.displayName}
                />
            ))}
        </ScrollView>
    );
}