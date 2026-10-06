import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DetalinScreen } from "./screens/DetalinScreen";
import { HomeScreen } from "./screens/HomeScrenn";
import { View, Text ,StyleSheet} from "react-native";
import { Navigation } from "./navigation/RootStack";
import { TabNavigation } from "./navigation/tabNavigation";
import { DrawerNavigation } from "./navigation/DrawerNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <Navigation /> */}
        {/* <TabNavigation/> */}
        <DrawerNavigation/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create ({
  container: {
    flex: 1
    
  }
})