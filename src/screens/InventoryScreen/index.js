/*
 *  Author: Kaleb Jubar
 *  Created: 5 Aug 2024, 7:08:21 PM
 *  Last update: 5 Aug 2024, 8:19:53 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
// navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "../CategoryScreen";
import ItemListScreen from "../ItemListScreen";
import ItemDetailScreen from "../ItemDetailScreen";

const Stack = createNativeStackNavigator();

export default function InventoryScreen() {
    return (
        // TODO: figure out how to make components hide during transition
        //       might be a hacky way, or set the background image on the nav
        //       instead of underneath the nav
        <Stack.Navigator>
            <Stack.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    headerShown: false,
                }}
            />
            
            <Stack.Screen
                name="ItemList"
                component={ItemListScreen}
                // use a function taking in route to set title from params
                options={({ route }) => (
                    {
                        title: route.params.category,
                    }
                )}
            />

            <Stack.Screen
                name="ItemDetail"
                component={ItemDetailScreen}
                options={({ route }) => (
                    {
                        title: route.params.itemName,
                    }
                )}
            />
        </Stack.Navigator>
    );
}