/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 10:57:04 AM
 *  Last update: 6 Aug 2024, 11:54:13 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

/**
 * Custom TabBar component so it can have a custom style and structure.
 * Most of this code is boilerplate taken from the example at https://reactnavigation.org/docs/bottom-tab-navigator#tabbar,
 * tailored to this app's needs.
 */
export default function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                // on pressing the tab
                const onPress = () => {
                    // emit navigation event
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    // if this tab isn't selected and our event wasn't stopped,
                    // switch to this screen
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                // on long pressing the tab
                const onLongPress = () => {
                    // emit navigation event
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Text style={{ ...styles.label, color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}