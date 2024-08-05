/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 5 Aug 2024, 7:23:19 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
// React Native/Expo components
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles from "./src/styles/structure";
import InventoryScreen from "./src/screens/InventoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
                <View style={styles.container}>
                    <StatusBar style="auto" />

                    <Tab.Navigator
                        initialRouteName="HomeScreen"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Tab.Screen
                            name="InventoryScreen"
                            component={InventoryScreen}
                            options={{
                                title: "Inventory",
                            }}
                        />

                        <Tab.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={{
                                title: "Home",
                            }}
                        />
                        
                        <Tab.Screen
                            name="CalculatorScreen"
                            component={CalculatorScreen}
                            options={{
                                title: "Calculator",
                            }}
                        />
                    </Tab.Navigator>
                </View>
        </NavigationContainer>
    );
}