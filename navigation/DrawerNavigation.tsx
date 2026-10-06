import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStaticNavigation } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScrenn";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SettingsScreens } from "../screens/SettingsScreens";

export type DrawerParamList = {
    home: undefined
    profile: undefined
    settings: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>({
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
        settings : {
            screen: SettingsScreens,
            options: {
                title: ' configuração'

            }
        }
    }
})
export const DrawerNavigation = createStaticNavigation(Drawer)