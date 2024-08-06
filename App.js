/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 6 Aug 2024, 1:17:12 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
// React Native/Expo components
import { ImageBackground, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// navigation
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// default component props
import setDefaultProps from 'react-native-simple-default-props'

import styles, { darkColor } from "./src/styles/structure";

import InventoryScreen from "./src/screens/InventoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import TabBar from "./src/components/TabBar";

const Tab = createBottomTabNavigator();

// create a theme for navigation in the app
// uses defaults except background color, which should be transparent,
// as the root has a background image we want on every screen
const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
}

// set default styles for some components
setDefaultProps(Text, {
    style: {
        color: darkColor,
    },
});

export default function App() {
    return (
        <NavigationContainer theme={navTheme}>
            <ImageBackground
                source={require("./assets/background.png")}
                resizeMode="cover"
                style={styles.bgImage}
            >
                <View style={styles.container}>
                    <StatusBar style="light" />

                    {/* TODO: add icons and styling */}
                    <Tab.Navigator
                        initialRouteName="HomeScreen"
                        backBehavior="initialRoute"
                        screenOptions={{
                            headerShown: false,
                        }}
                        tabBar={(props) => <TabBar {...props}/>}
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
            </ImageBackground>
        </NavigationContainer>
    );
}