/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:42:58 PM
 *  Last update: 8 Aug 2024, 5:27:56 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { ScrollView, Text, TouchableHighlight } from "react-native";

import { useSelector } from "react-redux";

import ButtonWithIcon from "../../components/ButtonWithIcon";

import globalStyles from "../../styles/structure";
import styles from "./styles";

export default function CategoryScreen({ navigation }) {
    const categoryList = useSelector((state) => state.categories);

    return (
        <ScrollView style={globalStyles.navContainer} contentContainerStyle={styles.container}>
            {categoryList.map((category) => (
                <ButtonWithIcon
                    key={category.id}
                    onPress={() => navigation.navigate("ItemList", { category: category.displayName, })}
                    caption={category.displayName}
                />
            ))}
        </ScrollView>
    );
}