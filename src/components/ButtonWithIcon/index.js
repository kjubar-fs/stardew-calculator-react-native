/*
 *  Author: Kaleb Jubar
 *  Created: 6 Aug 2024, 1:31:00 PM
 *  Last update: 6 Aug 2024, 1:39:05 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Pressable } from "react-native";

/**
 * Custom button component that uses standard styles and animations,
 * and also supports having an icon next to the text.
 */
export default function ButtonWithIcon(props) {
    const { children, ...propsNoChildren } = props;

    return (
        <Pressable {...propsNoChildren}>
            {children}
        </Pressable>
    );
}