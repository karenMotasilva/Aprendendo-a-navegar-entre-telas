
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScrenn';
import { DetalinScreen } from '../screens/DetalinScreen';



export type RootStackParamList =  {
  home : {
    post? : string
  }
  Details : {
    detailId : number
  }
}

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName : 'home',
  screens : {
    home: {
      screen: HomeScreen
    },
    Details :  {
        screen : DetalinScreen }
    
  }

});

export const Navigation = createStaticNavigation(RootStack)