/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:40:58 PM
 *  Last update: 7 Aug 2024, 4:15:47 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { darkColor, midLightColor } from "../../styles/structure";
import styles from "./styles";

export default function Checkbox({ initialValue, onChange, caption, style }) {
    // allow using initial value, double negate to convert
    // undefined to false if not provided
    const [checked, setChecked] = useState(!!initialValue);

    /**
     * Toggle this checkbox.
     */
    const toggleCheck = () => {
        if (onChange) onChange(!checked);
        setChecked(!checked);
    };

    /**
     * Get the checkmark for this box based on the state and pressed.
     * @param {boolean} pressed whether the Pressable is being pressed
     * @returns an appropriate checkmark icon, or nothing
     */
    const getCheck = (pressed) => {
        if (pressed) return <MaterialIcons name="check" size={24} color={midLightColor} />;
        if (checked) return <MaterialIcons name="check" size={24} color={darkColor} />;
    };

    return (
        <Pressable style={[ styles.container, style ]} onPress={toggleCheck}>
            {({ pressed }) => (
                <>
                    <View style={styles.checkbox}>
                        {getCheck(pressed)}
                    </View>
                    <Text style={styles.caption}>{caption}</Text>
                </>
            )}
        </Pressable>
    );
}