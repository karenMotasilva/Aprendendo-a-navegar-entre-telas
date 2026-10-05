
import { View, Text} from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { RootStackParamList } from '../navigation/RootStack';


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


type Props = {
  route : {
    params ? : RootStackParamList['home']
  }
}


export function HomeScreen({route} : Props) {
  const navigation = useNavigation<NavigationProp>()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>
        post : {route.params?.post ?? 'Nenhum texto recebido'}
      </Text>
       <Button onPress={() => navigation.navigate('Details', {detailId: 1})}>Go to Details</Button>
    </View>
  );
}
