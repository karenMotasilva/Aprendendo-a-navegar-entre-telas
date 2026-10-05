import { View, Text, Button, TextInput } from 'react-native';
import { Navigation } from '../navigation/RootStack';
import { createStaticNavigation  } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { RootStackParamList } from '../navigation/RootStack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>
type Props = {
  route: {
    params: RootStackParamList['Details']
  }
}

export function DetalinScreen({ route }: Props) {
  const navigation = useNavigation<NavigationProp>()
  const { detailId } = route.params
  const [ postText, setPostText ]= React.useState('')
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray'
    }}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{
          height: 300,
          width: 300,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 25,

        }}
        value={postText}
        onChangeText={setPostText}
      />
      <Text> Details Screen {detailId}</Text>
      <Button title='Go to back' onPress={() => navigation.popTo('home',{post : postText})} />
    </View>

  );
}

