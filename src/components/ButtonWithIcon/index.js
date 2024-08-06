/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 1:31:00 PM
 *  Last update: 6 Aug 2024, 2:30:48 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Pressable, Image, Text } from "react-native";

import styles from "./styles";

/**
 * Custom button component that uses standard styles and animations,
 * and also supports having an icon next to the text.
 */
export default function ButtonWithIcon(props) {
    // pull out props
    // use destructuring to get a buttonProps object that doesn't have
    // properties not related to the Pressable
    // this way it can be used like a normal Pressable with extra features
    const {
        children, style, direction,
        src, iconSize,
        caption,
        ...buttonProps
    } = props;

    return (
        <Pressable
            // set props from component props
            {...buttonProps}
            // set custom styles, overriding with provided styles
            style={[
                styles.button,
                { flexDirection: direction || "row" },
                style,
            ]}
        >
            <Image
                // TODO: implement image support using https://stackoverflow.com/questions/44991669/react-native-require-with-dynamic-string
                source={undefined}
                // default to an icon size of 32 if not provided
                style={{
                    width: iconSize || 32,
                    height: iconSize || 32,
                }}
            />
            <Text style={styles.caption}>{caption}</Text>
        </Pressable>
    );
}