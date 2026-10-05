import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DetalinScreen } from "./screens/DetalinScreen";
import { HomeScreen } from "./screens/HomeScrenn";
import { View, Text ,StyleSheet} from "react-native";
import { Navigation } from "./navigation/RootStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create ({
  container: {
    flex: 1
    
  }
})