/*
 *  Author: Kaleb Jubar
 *  Created: 7 Aug 2024, 12:27:33 PM
 *  Last update: 7 Aug 2024, 4:34:01 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Modal, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import * as settings from "../../redux/settingsSlice";

import ButtonWithIcon from "../ButtonWithIcon";
import Checkbox from "../Checkbox";

import globalStyles from "../../styles/structure";
import styles from "./styles";

export default function SettingsModal({ shown, onClose }) {
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
                                dispatch(settings.toggleRancher());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Gemologist"
                            initialValue={gemologistEnabled}
                            onChange={() => {
                                dispatch(settings.toggleGemologist());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Tiller"
                            initialValue={tillerEnabled}
                            onChange={() => {
                                dispatch(settings.toggleTiller());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Blacksmith"
                            initialValue={blacksmithEnabled}
                            onChange={() => {
                                dispatch(settings.toggleBlacksmith());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Artisan"
                            initialValue={artisanEnabled}
                            onChange={() => {
                                dispatch(settings.toggleArtisan());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Fisher"
                            initialValue={fisherEnabled}
                            onChange={() => {
                                dispatch(settings.toggleFisher());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Tapper"
                            initialValue={tapperEnabled}
                            onChange={() => {
                                dispatch(settings.toggleTapper());
                            }}
                        />
                        <Checkbox
                            style={styles.checkbox}
                            caption="Angler"
                            initialValue={anglerEnabled}
                            onChange={() => {
                                dispatch(settings.toggleAngler());
                            }}
                        />
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