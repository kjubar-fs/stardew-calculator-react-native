/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:08:18 PM
 *  Last update: 6 Aug 2024, 1:28:42 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, Image } from "react-native";

import globalStyles from "../../styles/structure";
import styles from "./styles";

export default function HomeScreen() {
    return (
        <View
            style={[ globalStyles.navContainer, styles.outerContainer ]}
        >
            <View style={styles.topContainer}>
                <View style={styles.titleContainer}>
                    <Image
                        source={require("../../../assets/logo.png")}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                    <Text style={styles.subtitle}>Calculator</Text>
                </View>

                <View style={styles.introContainer}>
                    <Text style={[ styles.introText, globalStyles.titleH1 ]}>
                        Welcome!
                    </Text>
                    <View style={styles.introBodyContainer}>
                        <Text style={styles.introText}>
                            This tool is a revenue calculator for Stardew Valley.
                        </Text>
                        <Text style={styles.introText}>
                            Get started by heading to the items tab and select some items to add to the calculator.
                        </Text>
                        <Text style={styles.introText}>
                            Then, switch to the calculator tab and modify the quantities to see your revenue totals, broken down by day and season!
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text>Test</Text>
            </View>
        </View>
    );
}