import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStaticNavigation } from "@react-navigation/native";

import { HomeScreen } from "../screens/HomeScrenn";
import { ProfileScreen } from '../screens/ProfileScreen'
import { SettingsScreens } from '../screens/SettingsScreens'


export type TabParamList = {
    home: undefined
    profile: undefined
    settings: undefined
}

const Tab = createBottomTabNavigator<TabParamList>({
    screens: {
        home: {
            screen: HomeScreen,
            options: {
                title: 'inicio'
            },
        },
        profile: {
            screen: ProfileScreen,
            options: {
                title: 'perfil'
            },

        },
        settings: {
            screen: SettingsScreens,
            options: {
                title: 'configurações'
            }
        }
    }
})

export const  TabNavigation = createStaticNavigation(Tab)