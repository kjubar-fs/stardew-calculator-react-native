/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:40:58 PM
 *  Last update: 7 Aug 2024, 1:14:07 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { darkColor } from "../../styles/structure";
import styles from "./styles";

export default function Checkbox({ initialValue, onChange, caption, style }) {
    // allow using initial value, double negate to convert
    // undefined to false if not provided
    const [checked, setChecked] = useState(!!initialValue);

    const toggleCheck = () => {
        if (onChange) onChange(!checked);
        setChecked(!checked);
    };

    return (
        <View style={[ styles.container, style ]}>
            <Pressable style={styles.checkbox} onPress={toggleCheck}>
                {checked &&
                    <MaterialIcons name="check" size={24} color={darkColor} />
                }
            </Pressable>
            <Text style={styles.caption}>{caption}</Text>
        </View>
    );
}