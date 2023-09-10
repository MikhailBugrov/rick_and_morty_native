import { View, Text, TouchableOpacity, Button } from "react-native";
import WhoYou from "./whoYou";

const Home = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Welcome !</Text>
      <WhoYou />
    </View>
  );
};

export default Home;
