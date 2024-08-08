/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:27:33 PM
 *  Last update: 8 Aug 2024, 2:37:37 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Modal, View, Text, TouchableHighlight } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useDispatch, useSelector } from "react-redux";

import { setProfessionSetting } from "../../data";

import Checkbox from "../Checkbox";

import globalStyles from "../../styles/structure";
import styles from "./styles";

export default function SettingsModal({ shown, onClose }) {
    const userId = useSelector((state) => state.settings.userId);
    const rancherEnabled = useSelector((state) => state.settings.professions.rancher);
    const gemologistEnabled = useSelector((state) => state.settings.professions.gemologist);
    const tillerEnabled = useSelector((state) => state.settings.professions.tiller);
    const blacksmithEnabled = useSelector((state) => state.settings.professions.blacksmith);
    const artisanEnabled = useSelector((state) => state.settings.professions.artisan);
    const fisherEnabled = useSelector((state) => state.settings.professions.fisher);
    const tapperEnabled = useSelector((state) => state.settings.professions.tapper);
    const anglerEnabled = useSelector((state) => state.settings.professions.angler);
    const dispatch = useDispatch();

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
                        <Checkbox
                            style={styles.checkbox}
                            caption="Rancher"
                            initialValue={rancherEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "rancher", !rancherEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Gemologist"
                            initialValue={gemologistEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "gemologist", !gemologistEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Tiller"
                            initialValue={tillerEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "tiller", !tillerEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Blacksmith"
                            initialValue={blacksmithEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "blacksmith", !blacksmithEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Artisan"
                            initialValue={artisanEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "artisan", !artisanEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Fisher"
                            initialValue={fisherEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "fisher", !fisherEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Tapper"
                            initialValue={tapperEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "tapper", !tapperEnabled, dispatch);
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Angler"
                            initialValue={anglerEnabled}
                            onChange={() => {
                                setProfessionSetting(userId, "angler", !anglerEnabled, dispatch);
                            }}
                        />
                    </View>

                    <TouchableHighlight
                        style={styles.close}
                        onPress={onClose}
                        underlayColor="#FFE395"
                    >
                        <MaterialIcons name="close" size={24} color="#C00" />
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}