/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 7 Aug 2024, 6:05:45 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
// React Native/Expo components
import { ImageBackground, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

// navigation
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// default component props
import setDefaultProps from 'react-native-simple-default-props'

// Redux
import { Provider } from "react-redux";
import store from "./src/data/state/store";

import styles, { darkColor } from "./src/styles/structure";

import AppLoader from "./src/components/AppLoader";
import InventoryScreen from "./src/screens/InventoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import TabBar from "./src/components/TabBar";

SplashScreen.preventAutoHideAsync();

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
        fontSize: 16,
    },
});

export default function App() {
    return (
        <Provider store={store}>
        <AppLoader />
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
        </Provider>
    );
}