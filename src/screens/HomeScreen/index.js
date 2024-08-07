/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:08:18 PM
 *  Last update: 7 Aug 2024, 12:29:17 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, Image, Modal } from "react-native";

import globalStyles from "../../styles/structure";
import styles from "./styles";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import { useState } from "react";
import SettingsModal from "../../components/SettingsModal";

export default function HomeScreen() {
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettingsModal = () => {
        setShowSettings(!showSettings);
    };

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
                <ButtonWithIcon
                    onPress={toggleSettingsModal}
                    caption="Settings"
                    iconSize={32}
                    // src="../../../assets/logo.png"
                />
            </View>

            <SettingsModal shown={showSettings} onClose={toggleSettingsModal} />
        </View>
    );
}