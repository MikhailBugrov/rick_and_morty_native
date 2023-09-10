// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, StatusBar } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { Navigation } from "./screens/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
