/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:27:33 PM
 *  Last update: 7 Aug 2024, 1:17:17 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Modal, View, Text } from "react-native";

import ButtonWithIcon from "../ButtonWithIcon";
import globalStyles from "../../styles/structure";
import styles from "./styles";
import Checkbox from "../Checkbox";

export default function SettingsModal({ shown, onClose }) {
    return (
        <Modal
            visible={shown}
            transparent={true}
        >
            <View style={[ globalStyles.navContainer, styles.modalBlur ]}>
                <View style={[ globalStyles.cardWithBorder, styles.container ]}>
                    <Text style={globalStyles.titleH1}>Settings</Text>

                    <Text style={globalStyles.titleH2}>Professions</Text>
                    <View style={styles.checkboxGrid}>
                        <Checkbox style={styles.checkbox} caption="Rancher" />
                        <Checkbox style={styles.checkbox} caption="Gemologist" />
                        <Checkbox style={styles.checkbox} caption="Tiller" />
                        <Checkbox style={styles.checkbox} caption="Blacksmith" />
                        <Checkbox style={styles.checkbox} caption="Artisan" />
                        <Checkbox style={styles.checkbox} caption="Fisher" />
                        <Checkbox style={styles.checkbox} caption="Tapper" />
                        <Checkbox style={styles.checkbox} caption="Angler" />
                    </View>
                    
                    {/* TODO: make this a floating X button in the top right */}
                    <ButtonWithIcon
                        caption="Close"
                        onPress={onClose}
                    />
                </View>
            </View>
        </Modal>
    );
}