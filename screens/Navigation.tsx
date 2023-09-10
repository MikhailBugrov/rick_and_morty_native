import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Home from "./homeScreen";
import CharactersList from "./characterScreen/charactersList";
import CharacterDetails from "./characterScreen/characterDetails";
import LocationsList from "./locationScreen/locationsList";
import LocationDetails from "./locationScreen/locationDetails";
import EpisodesList from "./episodeScreen/episodesList";
import EpisodeDetails from "./episodeScreen/episodeDetails";
import LiveOrDead from "./liveOrDeadScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const CharactersTopTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#0000FF",
          fontSize: 16,
        },
      }}>
      <Stack.Screen name="CharactersList" component={CharactersList} options={{ headerShown: false }} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={{ title: "CharacterDetails" }} />
    </Stack.Navigator>
  );
};

const LocationsTopTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#0000FF",
          fontSize: 16,
        },
      }}>
      <Stack.Screen name="LocationsList" component={LocationsList} options={{ headerShown: false }} />
      <Stack.Screen name="LocationDetails" component={LocationDetails} options={{ title: "LocationDetails" }} />
    </Stack.Navigator>
  );
};

const EpisodesTopTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#0000FF",
          fontSize: 16,
        },
      }}>
      <Stack.Screen name="EpisodesList" component={EpisodesList} options={{ headerShown: false }} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} options={{ title: "EpisodeDetails" }} />
    </Stack.Navigator>
  );
};

const WikiTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0000FF",
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
        // tabBarStyle: { backgroundColor: "#40E0D0" },
      }}>
      <TopTab.Screen name="Characters" component={CharactersTopTab} />
      <TopTab.Screen name="Locations" component={LocationsTopTab} />
      <TopTab.Screen name="Episodes" component={EpisodesTopTab} />
    </TopTab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#0000FF",
          // tabBarStyle: { backgroundColor: "#40E0D0" },
          headerTitleStyle: {
            color: "#0000FF",
            fontSize: 18,
          },
          // headerStyle: {
          //   backgroundColor: "#40E0D0",
          // },
        }}>
        <Tab.Screen
          name="Rick and Morty"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Wiki"
          component={WikiTabs}
          options={{
            headerTitle: "",
            headerStyle: {
              height: StatusBar.currentHeight,
            },
            tabBarLabel: "Wiki",
            tabBarIcon: ({ color }) => <FontAwesome name="wikipedia-w" color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="LiveOrDead"
          component={LiveOrDead}
          options={{
            tabBarLabel: "LiveOrDead",
            tabBarIcon: ({ color }) => <Entypo name="game-controller" color={color} size={26} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// options={{ headerShown: false }}
